import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../service/application.service';

@Component({
  selector: 'app-all-applicants',
  templateUrl: './all-applicants.component.html',
  styleUrls: ['./all-applicants.component.css']
})
export class AllApplicantsComponent implements OnInit {

  applications : any;
  displayApplications : any;
  jobSearch : string = '';
  nameSearch : string = '';

  constructor(private applicationService : ApplicationService) { }

  ngOnInit(): void {
    this.getAllApplications();
  }

  getAllApplications() {
    this.applicationService.getAllApplications().subscribe(res => {
      this.applications = res;
      this.displayApplications = res;
    }, err => {
      console.log(err);
    });
  }

  searchJob(){
    this.displayApplications = this.applicationService.filterApplicationByJob(this.jobSearch, this.applications);
  }

  searchName(){
    this.displayApplications = this.applicationService.filterApplicationByName(this.nameSearch, this.applications);
  }

}
