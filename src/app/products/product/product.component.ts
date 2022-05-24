import { Component, OnInit } from '@angular/core';
import { GetapiService } from 'src/app/services/getapi.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
catname:any;
product:any;
cat:any="";
name:string="all"
  constructor(private userdat:GetapiService,private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
     this.route.queryParams      
       .subscribe(params => {
         this.cat=params; console.log(this.cat.category)
    this.product= this.userdat.product(this.cat.category).subscribe((dat)=>this.product=dat);
       this.name=this.cat.category
       })

     

  }

}
