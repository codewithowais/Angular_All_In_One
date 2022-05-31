import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticService {

  constructor(private http:HttpClient) { }
  isLoggedIn(){
    if(localStorage.getItem('user')){
      return true;
    }else{
      return false;

    }
  }
}
