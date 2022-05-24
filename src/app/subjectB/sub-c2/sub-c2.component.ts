import { Component, OnInit } from '@angular/core';
import { GetapiService } from 'src/app/services/getapi.service';

@Component({
  selector: 'app-sub-c2',
  templateUrl: './sub-c2.component.html',
  styleUrls: ['./sub-c2.component.css']
})

export class SubC2Component implements OnInit {
  sub2valu:string="2";
  constructor(private serv:GetapiService) { 
    this.serv.subvalue.subscribe(val=>this.sub2valu=val)
  }

  ngOnInit(): void {
  }
  click(v:any){
    this.serv.subvalue.next(v.value)
  }
}
