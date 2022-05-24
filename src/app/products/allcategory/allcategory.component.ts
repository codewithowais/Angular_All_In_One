import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {GetapiService} from '../../services/getapi.service';

@Component({
  selector: 'app-allcategory',
  templateUrl: './allcategory.component.html',
  styleUrls: ['./allcategory.component.css']
})
export class AllcategoryComponent implements OnInit {
  catname:any;
  constructor(private userdat:GetapiService ,private router:Router) { 
    //this.catname=this.userdata.categories().subscribe((dat:any)=>console.warn(this.catname=dat));
    this.catname=this.userdat.categories().subscribe((dat)=>console.warn(this.catname=dat));
    
    console.log(this.catname)
  }

  ngOnInit(): void {
  }
onclick(sdf:string){
  this.router.navigate(['product/products'], { queryParams: {category:sdf}, skipLocationChange: true});

}
}
