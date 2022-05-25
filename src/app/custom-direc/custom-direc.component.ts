import {  ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GetapiService } from '../services/getapi.service';

@Component({
  selector: 'app-custom-direc',

  templateUrl: './custom-direc.component.html',
  styleUrls: ['./custom-direc.component.css']
})
export class CustomDirecComponent implements OnInit {

  constructor(private serv:GetapiService, private cdr:ChangeDetectorRef) { 
 
  }

  ngOnInit(): void {
  }
  onclick(a:any){
   
    
    this.serv.color.next(a.value)
    this.serv.subvalue.next(a.value)
    console.log(a.value)
       
    

  }

}
