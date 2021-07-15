import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { RecruiterService } from '../../service/recruiter.service'

@Component({
  selector: 'app-recruiter-login',
  templateUrl: './recruiter-login.component.html',
  styleUrls: ['./recruiter-login.component.css']
})
export class RecruiterLoginComponent implements OnInit {

  email : string = '';
  password : string = '';
  errorText : string = '';

  constructor(private recruiterService : RecruiterService, private router : Router) { }

  ngOnInit(): void {
    document.body.className = "loginbg";
  }

  ngOnDestroy(): void {
    document.body.className = "";
  }

  /**
    *Function to perform authentication. 
    */
  async authenticate(){
    let data = {
        "email": this.email,
        "password": this.password
    };
    this.recruiterService.authenticate(data).subscribe(res => {
      let data : any = res;
      data.type = "R";
      localStorage.setItem('LOGGED_IN_USER', JSON.stringify(data));
      this.router.navigateByUrl("recruiter/dashboard");
    }, err => {
      this.errorText = err.error.errorMessage;
    });
  }

  clearMessage(){
    this.errorText = '';
  }

}
