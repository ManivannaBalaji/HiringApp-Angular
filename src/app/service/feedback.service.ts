import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Get all feedback given by users.
   */
  getAllFeedback() {
    let url = "http://localhost:3000/api/feedback";
    return this.httpClient.get(url);
  }
}
