import { Component, OnInit } from '@angular/core';
import { GetapiService } from 'src/app/services/getapi.service';

@Component({
  selector: 'app-sub-c1',
  templateUrl: './sub-c1.component.html',
  styleUrls: ['./sub-c1.component.css']
})
export class SubC1Component implements OnInit {
sub1valu:string="1"
constructor(private serv:GetapiService) { 
  this.serv.subvalue.subscribe(val=>this.sub1valu=val)
}

  ngOnInit(): void {
  }
click(v:any){
  this.serv.subvalue.next(v.value)
  this.serv.color.next(v.value)
}
}
