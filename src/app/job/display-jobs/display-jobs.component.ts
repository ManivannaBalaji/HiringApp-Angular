import { Component, OnInit } from '@angular/core';
import { JobService } from '../../service/job.service';

@Component({
  selector: 'app-display-jobs',
  templateUrl: './display-jobs.component.html',
  styleUrls: ['./display-jobs.component.css']
})
export class DisplayJobsComponent implements OnInit {

  jobOffers : any;
  displayJobs : any;
  jobSearch : string = "";

  constructor(private jobService : JobService) { }

  ngOnInit(): void {
    this.getJobOffers();
  }
  
  getJobOffers(){
    this.jobService.getJobOffers().subscribe(res => {
      this.jobOffers = res;
      this.displayJobs = this.jobOffers;
    }, err => {
      console.log(err);
    });
  }

  searchJob(){
    this.displayJobs = this.jobService.searchJobOffer(this.jobSearch, this.jobOffers);
    console.log(this.displayJobs);
  }

}
