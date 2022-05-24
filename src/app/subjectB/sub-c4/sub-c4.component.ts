import { Component, OnInit } from '@angular/core';
import { GetapiService } from 'src/app/services/getapi.service';

@Component({
  selector: 'app-sub-c4',
  templateUrl: './sub-c4.component.html',
  styleUrls: ['./sub-c4.component.css']
})
export class SubC4Component implements OnInit {
  sub4valu:string="4"
  constructor(private serv:GetapiService) { 
    this.serv.subvalue.subscribe(val=>this.sub4valu=val)
  }

  ngOnInit(): void {
  }
  click(v:any){
    this.serv.subvalue.next(v.value)
  }
}
