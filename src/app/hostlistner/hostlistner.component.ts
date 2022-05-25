import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-hostlistner',
  templateUrl: './hostlistner.component.html',
  styleUrls: ['./hostlistner.component.css']
})
export class HostlistnerComponent implements OnInit {
cls:string="jq"
  constructor(private el:ElementRef) { }

  ngOnInit(): void {
   
  }
  onChange(event:any)
  {
    

    if(event==true){

    }else{

    
    }
   
  }
}
