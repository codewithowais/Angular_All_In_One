import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators,FormControl } from '@angular/forms';
<<<<<<< HEAD
import { empty } from 'rxjs';
=======
import {Location} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { empty } from 'rxjs';
import { MenuComponent } from '../menu/menu.component';
import { AuthenticService } from '../services/authentic.service';
>>>>>>> ac6a49e5709322c7c09d7bd758152e9d56ee8a8a

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
<<<<<<< HEAD
    if(this.myForm.valid){

      localStorage.setItem('user', this.myForm.value.email)
      console.log(localStorage.getItem('user'))
     
    }
    else{
      this.myForm.setErrors({...this.myForm.errors, 'ee': true });
      return;
=======
   
    if(this.myForm.valid){
      localStorage.setItem('user','login')
this.serve.logv.next(false)
      if(this.route.snapshot.queryParams['ur'] != undefined){
          console.log(this.route.snapshot.queryParams['ur'])
          this.router.navigate([this.route.snapshot.queryParams['ur']]);
       }
       else{     
              this.router.navigate([''])
        }
>>>>>>> ac6a49e5709322c7c09d7bd758152e9d56ee8a8a
    }
 
  }
<<<<<<< HEAD
  get email(){
    return this.myForm.get('email')
  }
  get pas(){
    return this.myForm.get('password')
  }
=======
get email(){
return this.myForm.get('email')
}
get password() {
  return this.myForm.get('password');
}
>>>>>>> ac6a49e5709322c7c09d7bd758152e9d56ee8a8a

}
