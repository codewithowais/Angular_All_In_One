import { Component, OnInit } from '@angular/core';
import { GetapiService } from 'src/app/services/getapi.service';

@Component({
  selector: 'app-sub-c3',
  templateUrl: './sub-c3.component.html',
  styleUrls: ['./sub-c3.component.css']
})
export class SubC3Component implements OnInit {
  sub3valu:string="3"
  constructor(private serv:GetapiService) { 
    this.serv.subvalue.subscribe(val=>this.sub3valu=val)
  }

  ngOnInit(): void {
  }
  click(v:any){
    this.serv.subvalue.next(v.value)
  }
}
