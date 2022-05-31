import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticService } from './services/authentic.service';
import { GetapiService } from './services/getapi.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route:Router , private serv:AuthenticService){}
  canActivate(
    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(this.serv.isLoggedIn()){
      return true;
    }else{
  this.route.navigate(['login'], { skipLocationChange: true});
      
      return false;
    }
      
  }
  
}
