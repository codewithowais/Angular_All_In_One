import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticService {
  logv=new BehaviorSubject(true);
  constructor(private http:HttpClient) { 


  }
  isLoggedIn(){
    if(localStorage.getItem('user')){
      return true;
    }else{
      return false;

    }
  }
}
