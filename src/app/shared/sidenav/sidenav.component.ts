import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  userName : string = '';

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.getUserName();
  }

  getUserName(){
    let loginData : any = localStorage.getItem('LOGGED_IN_USER');
    this.userName = JSON.parse(loginData).name;
  }

  logout() {
    localStorage.removeItem('LOGGED_IN_USER');
    this.router.navigateByUrl('');
  }

}
