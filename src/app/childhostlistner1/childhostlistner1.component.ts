import { CssSelector } from '@angular/compiler';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-childhostlistner1',
  templateUrl: './childhostlistner1.component.html',
  styleUrls: ['./childhostlistner1.component.css']
})
export class Childhostlistner1Component implements OnInit {
  cl:boolean =true;
  constructor() { }
@Input() cls:any;
  ngOnInit(): void {
   
  }
  numSequence(n: number): Array<number> {
    return Array(n);
  }
  @HostListener('mouseover', ['$event.target']) fn(e:any){
    console.log(this.cls)
    if(e.classList.contains("jq"))
    e.style.background='pink'
   
   
    }
    @HostListener('mouseout', ['$event.target']) fn2(e:any){
      
      if(e.class=="jq")
      e.style.background='brown'
     
     
      }
}
