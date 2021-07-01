import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private httpClient : HttpClient) { }

  /**
   * Get all applications applied by applicants.
   */
  getAllApplications() {
    let url = "http://localhost:3000/api/applications";
    return this.httpClient.get(url);
  }

  /**
   * Get an application details by using id
   * @param id 
   */
  getApplication(id : any){
    let url = "http://localhost:3000/api/applications/" + id;
    return this.httpClient.get(url);
  }

  /**
   * Update application details (score, status, comments)
   * @param applicationId 
   * @param updatedData 
   */
  updateApplication(applicationId : number, updatedData : any){
    let url = "http://localhost:3000/api/applications/" + applicationId;
    return this.httpClient.patch(url, updatedData);
  }

  /**
   * Filter applications based on job name
   * @param job 
   * @param applications 
   */
  filterApplicationByJob(job : any, applications : any){
    let searchedApplications : any = [];
    applications.forEach(function(element : any){
      if(element.jobtitle.toLowerCase().includes(job.toLowerCase())){
        searchedApplications.push(element);
      }
    });
    return searchedApplications;
  }

  /**
   * Filter applications based on applicant name
   * @param name 
   * @param applications 
   */
  filterApplicationByName(name : any, applications : any){
    let searchedApplications : any = [];
    applications.forEach(function(element : any){
      if(element.name.toLowerCase().includes(name.toLowerCase())){
        searchedApplications.push(element);
      }
    });
    return searchedApplications;
  }
}
