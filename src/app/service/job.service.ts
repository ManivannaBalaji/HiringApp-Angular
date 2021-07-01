import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private httpClient : HttpClient) { }

  /**
   * Get all available job offers
   */
  getJobOffers(){
    let url = "http://localhost:3000/api/jobs";
    return this.httpClient.get(url);
  }

  /**
   * Get a job details using job id. 
   * @param id 
   */
  getJobOffer(id : any){
    let url = "http://localhost:3000/api/jobs/" + id;
    return this.httpClient.get(url);
  }

  /**
   * Add new job offer
   * @param jobOffer 
   */
  addJobOffer(jobOffer : any){
    let url = "http://localhost:3000/api/jobs";
    return this.httpClient.post(url, jobOffer);
  }

  /**
   * Update an already available job details
   * @param oldJobOfferId 
   * @param updatedJob 
   */
  updateJobOffer(oldJobOfferId : any, updatedJob : any){
    let url = "http://localhost:3000/api/jobs/" + oldJobOfferId;
    return this.httpClient.put(url, updatedJob);
  }

  /**
   * Delete a job offer
   * @param jobId 
   */
  removeJobOffer(jobId : any){
    let url = "http://localhost:3000/api/jobs/" + jobId;
    return this.httpClient.delete(url);
  }

  /**
   * Archive the job post (Remove a job and related applications, selected list)
   * @param id 
   */
  archivePost(id : number){
    let url = "http://localhost:3000/api/jobs/" + id + "/archive";
    return this.httpClient.put(url, {});
  }

  /**
   * Get status of hiring process for dashboard
   */
  getStatus(){
    let url = "http://localhost:3000/api/dashboard";
    return this.httpClient.get(url);
  }

  /**
   * Filter joboffers by job name
   * @param jobOfferName 
   * @param jobOffers 
   */
  searchJobOffer(jobOfferName : string, jobOffers : any){
    let searchedJobOffer : any = [];
    jobOffers.forEach(function(element : any) {
        if(element.jobtitle.toLowerCase().includes(jobOfferName.toLowerCase())){
            searchedJobOffer.push(element);
        }
    });
    return searchedJobOffer;
  }
}
