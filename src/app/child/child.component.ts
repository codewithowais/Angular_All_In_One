import { Component, Input, OnInit ,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() uplace:string="asdf";
  @Input() aplace:string="asdf";
@Input() ulc:number=0;
@Input() alc:number=0;
 @Output() aval=new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {
  }
 
  onclick(inf:any){
    this.aval.emit(inf)
  }
}
