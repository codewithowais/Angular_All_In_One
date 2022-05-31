import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators,FormControl } from '@angular/forms';
import {Location} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { AuthenticService } from '../services/authentic.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


   myForm:FormGroup;
err:boolean=true;

  constructor(private fb:FormBuilder,private _location: Location,private route: ActivatedRoute,
    private router:Router,private serve:AuthenticService) {
    this.myForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]

     })
     
 
  
   }

  ngOnInit(): void {
   
  }
  onsubmit(): void {
    if(this.myForm.valid){    
         localStorage.setItem('user', this.myForm.value.email)
         this.serve.logv.next(false)
        if(this.route.snapshot.queryParams['ur'] != undefined){
          console.log(this.route.snapshot.queryParams['ur'])
          this.router.navigate([this.route.snapshot.queryParams['ur']]);
        }
        else{     
              this.router.navigate([''])
        }

    }
 
  else{
    this.myForm.setErrors({...this.myForm.errors, 'ee': true });
    return;
  }
}
  get email(){
    return this.myForm.get('email')
  }
  get pas(){
    return this.myForm.get('password')
  }



}
