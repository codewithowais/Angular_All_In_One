

import {  Directive, ElementRef } from '@angular/core';
import { GetapiService } from './services/getapi.service';

@Directive({
  selector: '[appCustom]',

})
export class CustomDirective {
color:string="red"

  constructor(elem:ElementRef ,private serv:GetapiService) {
   
    this.serv.color.subscribe((clr:any)=>
    {this.color=clr
    
      elem.nativeElement.style.background=this.color;
    
    })
  
  }

}
