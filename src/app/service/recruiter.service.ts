import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {

  constructor(private httpClient : HttpClient) { }

  authenticate(data : any){
    let url = "http://localhost:3000/api/recruiter/login";
    return this.httpClient.post(url, data);
  }

}
