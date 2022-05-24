import { Component, OnInit } from '@angular/core';
import {GetapiService} from '../services/getapi.service';
//import {} from ''
@Component({
  selector: 'app-Getapi',
  templateUrl: './Getapi.component.html',
  styleUrls: [
    './Getapi.component.css']
})
export class GetapiComponent implements OnInit {
  uni:any
  cat:any
  list:any
  catname:any;
  constructor( private userdata:GetapiService) {
   //userdata.uni().subscribe((dat)=>{this.uni=dat})
   //console.warn(this.uni)
    
    // userdata.product().subscribe((dat)=>console.warn(this.list=dat))
    // console.log(this.list)
    this.catname=this.userdata.categories().subscribe((dat)=>console.warn(this.catname=dat));
  
  }
  


      
  
  ngOnInit(): void {
   
  }

}
