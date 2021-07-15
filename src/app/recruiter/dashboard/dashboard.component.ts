import { Component, OnInit } from '@angular/core';
import { JobService } from '../../service/job.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  jobOffers : any;

  constructor(private jobService : JobService) { }

  ngOnInit(): void {
    this.getStatus();
  }

  getStatus(){
    this.jobService.getStatus().subscribe(res => {
      this.jobOffers = res;
    }, err => {
      console.log(err);
    });
  }

}
