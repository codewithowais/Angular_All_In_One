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
    $('.jq').hover(function(){ 
      this.style.background='green'
    }
      )
      $('.jq').mouseout(function(){ 
        this.style.background='white'
      }
        )
  }
  numSequence(n: number): Array<number> {
    return Array(n);
  }
  @HostListener('click', ['$event.target']) fn(e:any){
    console.log(this.cls)
    e.style.background='red'
   
   
    }
}
