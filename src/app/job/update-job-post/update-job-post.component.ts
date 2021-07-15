import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../../service/job.service';
import {DataValidatorService} from '../../utils/data-validator.service';

@Component({
  selector: 'app-update-job-post',
  templateUrl: './update-job-post.component.html',
  styleUrls: ['./update-job-post.component.css']
})
export class UpdateJobPostComponent implements OnInit {

  jobId : number;
  job : any;
  today : string = '';
  errorText : string = '';

  constructor(private jobService: JobService, private route : ActivatedRoute, private validator : DataValidatorService) {
    this.jobId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getJobOffer(this.jobId);
    this.today = new Date().toJSON().substr(0, 10);
  }

  getJobOffer(id: any) {
    this.jobService.getJobOffer(id).subscribe(res => {
      this.job = res;
    }, err => {
      console.log(err);
    });
  }

  updatePost(){
    let updatedJob = this.job;
    delete updatedJob.jobtitle;
    delete updatedJob.location;
    if(this.validateData(updatedJob)){
      this.jobService.updateJobOffer(this.jobId, updatedJob).subscribe(res => {
        alert("Job updated successfully");
      }, err => {
        this.errorText = err.error.errorMessage;
      })
    }
  }

  validateData(job : any){
    let isFormFilled : boolean = this.validator.checkUpdateFields(job);
    let isValidExperience : boolean = this.validator.validateExperience(job.minyears, job.maxyears);
    let isValidSalary : boolean = this.validator.validateSalary(job.minsalary, job.maxsalary);
    let isValid : boolean = false;
    if(isFormFilled && isValidExperience && isValidSalary){
      isValid = true;
    } else if(!isFormFilled){
      this.errorText = "Please fill all the form fields!";
      isValid = false;
    } else if(!isValidSalary){
      this.errorText = "Invalid Salary! Please check whether min salary is less than max salary";
      isValid = false;
    } else if(!isValidExperience){
      this.errorText = "Invalid Experience! Please check whether min experience is less than max experience";
      isValid = false;
    }
    return isValid;
  }
}
