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

  job = { jobTitle: null, jobType : null, 
      description : null,
  skills : null,
  minYears : null,
  maxYears : null,
  minSalary: null ,
  maxSalary : null,
  location : null,
  vacancy : null,
  qualification : null,
  endDate : null,
  errorText: null,
  today : null
  };

  constructor(private jobService : JobService, private router : Router, private dataValidatorService : DataValidatorService) {
    this.today = new Date().toJSON().substr(0, 10);
  }

  ngOnInit(): void {
  }

  addJob(){
    /*const job = {
      "jobtitle": this.jobTitle,
      "jobtype": this.jobType,
      "description": this.description,
      "skills": this.skills,
      "minyears": this.minYears,
      "maxyears": this.maxYears,
      "minsalary": this.minSalary,
      "maxsalary": this.maxSalary,
      "location": this.location,
      "vacancy": this.vacancy,
      "qualification": this.qualification,
      "end_date": this.endDate
    };
    */

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

}
