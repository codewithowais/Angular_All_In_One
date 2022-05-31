import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthenticService } from '../services/authentic.service';
import { GetapiService } from '../services/getapi.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
log:boolean=true;

  constructor(private serve:AuthenticService) {
   
   this.serve.logv.subscribe(data=>this.log=data)
   if(localStorage.getItem('user')){
    this.serve.logv.next(false)
  }else{
    this.serve.logv.next(true)
  
  }
  }

  ngOnInit(): void {
  }

}
