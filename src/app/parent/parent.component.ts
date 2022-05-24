import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  uplace:string="Create User";
  aplace:string="Create Admin";
  constructor() { }
  userlist:any[]=[];
  adminlist:any[]=[];
  ulc:number=0;
  alc:number=0;
  ngOnInit(): void {
  }
  fun(re:any){
    if(re.name=="admin"){
      this.adminlist.push(re.value);
      this.alc=this.adminlist.length;
    }

    else  {
      this.userlist.push(re.value);
      this.ulc=this.userlist.length;
    }

  }
  remuser(ru:any){
    debugger
    if(ru.id=="a"){const index: number = this.userlist.indexOf(ru);
      this.userlist.splice(index,1);}
      else{const index: number = this.adminlist.indexOf(ru);
        this.adminlist.splice(index,1);}
    
    

  }

}
