import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticService } from './services/authentic.service';
import { GetapiService } from './services/getapi.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  ur:string=''
  constructor(private route:Router , private serv:AuthenticService){}
  canActivate(
    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.ur=state.url
      console.log(this.ur)
      if(this.serv.isLoggedIn()){
      return true;
    }else{

  this.route.navigate(['login'], {queryParams:{ur:this.ur}, skipLocationChange: true});
      
      return false;
    }
      
  }
  //
  canLoad(route: Route): boolean{
     
    console.log(route.path)
    if(this.serv.isLoggedIn()){
    return true;
  }else{

this.route.navigate(['login'], {queryParams:{ur:route.path}, skipLocationChange: true});
    
    return false;
  }
    return false
}
canDeactivate(
  
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
 
  return window.confirm('Are you sure logout from here?')
  //return this.permissions.canDeactivate(this.currentUser, route.params.id);
}

}
