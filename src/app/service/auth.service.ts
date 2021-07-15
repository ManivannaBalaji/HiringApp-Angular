import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUserToken(){
    let userData = localStorage.getItem('LOGGED_IN_USER');
    if(userData == null){
      return null;
    }
    let token = JSON.parse(userData).token;
    return token;
  }
}
