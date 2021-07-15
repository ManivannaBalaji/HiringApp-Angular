import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from '../../service/job.service';
import { DataValidatorService } from '../../utils/data-validator.service';

@Component({
  selector: 'app-view-job-details',
  templateUrl: './view-job-details.component.html',
  styleUrls: ['./view-job-details.component.css']
})
export class ViewJobDetailsComponent implements OnInit {

  jobId: number;
  job: any;
  status: string = '';
  isAuthorizedUser: boolean = false;

  constructor(private jobService: JobService, private route: ActivatedRoute, private router: Router, private validator: DataValidatorService) {
    this.jobId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getJobOffer(this.jobId);
  }

  getJobOffer(id: any) {
    this.jobService.getJobOffer(id).subscribe(res => {
      this.job = res;
      let isJobExpired = this.validator.checkExpireDate(this.job.end_date);
      if (isJobExpired) {
        this.status = "Closed";
      } else {
        this.status = "Opened";
      }
      this.authorizeUser();
    }, err => {
      console.log(err);
    });
  }

  deleteJob() {
    this.jobService.removeJobOffer(this.jobId).subscribe(res => {
      alert("Job successfully deleted");
      this.router.navigateByUrl("/recruiter/jobs");
    }, err => {
      alert("Error try again");
    });
  }

  archivePost() {
    this.jobService.archivePost(this.jobId).subscribe(res => {
      alert("Job successfully archived");
    }, err => {
      alert("Error try again");
    });
  }

  authorizeUser() {
    let loginData: any = localStorage.getItem('LOGGED_IN_USER');
    let loggedUser = JSON.parse(loginData).name;
    let createdUser = this.job.created_by;
    if (loggedUser === createdUser) {
      this.isAuthorizedUser = true;
    }
  }
}
