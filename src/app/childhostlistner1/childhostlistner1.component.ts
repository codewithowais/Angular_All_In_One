import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childhostlistner1',
  templateUrl: './childhostlistner1.component.html',
  styleUrls: ['./childhostlistner1.component.css']
})
export class Childhostlistner1Component implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  numSequence(n: number): Array<number> {
    return Array(n);
  }

}
