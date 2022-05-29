import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { GetapiService } from '../services/getapi.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-hostlistner',
  templateUrl: './hostlistner.component.html',
  styleUrls: ['./hostlistner.component.css']
})
export class HostlistnerComponent implements OnInit {
cls:string="jq"
clear:any
  constructor(private el:ElementRef , private serv:GetapiService) { }

  ngOnInit(): void {
    $( document ).ready(function() {
     
    ///
      function onhostlistner(){
        
        $('.jq').mouseover(function(){ 
          $('.jq').css("background","pink")
        }
          )
          $('.jq').mouseout(function(){ 
            $('.jq').css("background","brown")
          }
            )
      }
      onhostlistner();

    
      }); 
  
      }

  onChange(event:any)  
  {
   if(event==true){
      
      $(".jq").off("mouseover");
      $(".jq").off("mouseleave");
     
         

    }else{
      
      $('.jq').mouseover(function(){ 
        $('.jq').css("background","pink")
      }
        )
        $('.jq').mouseout(function(){ 
          $('.jq').css("background","brown")
        }
          )

    
    }
   
  }
  
}
