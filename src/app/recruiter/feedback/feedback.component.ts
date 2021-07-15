import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../../service/feedback.service';
import { JobService } from '../../service/job.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbacks: any;
  displayFeedbacks: any;
  searchText: string = '';

  constructor(private feedbackService: FeedbackService, private jobService: JobService) { }

  ngOnInit(): void {
    this.getAllFeedback();
  }

  getAllFeedback() {
    this.feedbackService.getAllFeedback().subscribe(res => {
      this.feedbacks = res;
      this.displayFeedbacks = this.feedbacks;
    }, err => {
      alert(err.error.errorMessage);
    });
  }

  searchJob() {
    this.displayFeedbacks = this.jobService.searchJobOffer(this.searchText, this.feedbacks);
  }

}
