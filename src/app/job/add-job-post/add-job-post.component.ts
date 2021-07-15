import { Component, OnInit } from '@angular/core';
import { JobService } from '../../service/job.service';
import { Router } from '@angular/router';
import { DataValidatorService } from '../../utils/data-validator.service';

@Component({
  selector: 'app-add-job-post',
  templateUrl: './add-job-post.component.html',
  styleUrls: ['./add-job-post.component.css']
})
export class AddJobPostComponent implements OnInit {

  job = { 
    jobtitle: null, 
    jobtype : null, 
    description : null,
    skills : null,
    minyears : null,
    maxyears : null,
    minsalary: null ,
    maxsalary : null,
    location : null,
    vacancy : null,
    qualification : null,
    end_date : null,
    created_by : null
  };
  errorText : string = '';
  today : string = '';

  constructor(private jobService : JobService, private router : Router, private dataValidatorService : DataValidatorService) {
    this.today = new Date().toJSON().substr(0, 10);
  }

  ngOnInit(): void {
    this.getUserName();
  }

  addJob(){
    if(this.validateData(this.job)){
      this.jobService.addJobOffer(this.job).subscribe(res => {
        alert("Job added successfully");
        this.router.navigateByUrl("recruiter/jobs");
      }, err => {
        this.errorText = err.error.errorMessage;
      });
    }
  }

  validateData(job : any){
    let isFormFilled : boolean = this.dataValidatorService.checkFormFields(job);
    let isValidExperience : boolean = this.dataValidatorService.validateExperience(job.minyears, job.maxyears);
    let isValidSalary : boolean = this.dataValidatorService.validateSalary(job.minsalary, job.maxsalary);
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

  getUserName(){
    let loginData : any = localStorage.getItem('LOGGED_IN_USER');
    this.job.created_by = JSON.parse(loginData).name;
  }

}
