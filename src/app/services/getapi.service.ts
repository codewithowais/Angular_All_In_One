import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
  @Injectable({
  providedIn: 'root'
})
export class GetapiService {
category:any[]=[];
category1:any;
color=new BehaviorSubject("red");
cls=new Subject();
catname=new Subject();
subvalue=new BehaviorSubject("subvalue");
  constructor(private http:HttpClient) { }
  uni(){
    return this.http.get('http://universities.hipolabs.com/search?country=Pakistan')
  }
  cat(){
    return this.http.get('https://catfact.ninja/fact')
  }
  photo(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos')

  }
  product(cat:string){
    var url='https://fakestoreapi.com/products/category/'+cat
    return this.http.get(url)
  }
  categories():Observable<any>{
    //return this.http.get('https://fakestoreapi.com/products').subscribe((dat)=>{this.catname.push(dat)});
    this.http.get('https://fakestoreapi.com/products/categories').subscribe(
      (data:any)=>{

       // this.catname.next(data);
       this.category=[];
       for(var i=0;i<data.length;i++){        
         var url='https://fakestoreapi.com/products/category/'+data[i]+'?limit=1'
        this.http.get(url).subscribe(
    (dat)=>{
      this.category.push(dat);        
  });
      }
        this.catname.next(this.category);

    });
    //return this.http.get('https://fakestoreapi.com/products/categories');
   
    //this.catname.next(data.value); 
    return this.catname;
  }

}
