import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators,FormControl } from '@angular/forms';
import { empty } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public myForm:FormGroup;

  constructor(private fb:FormBuilder) {
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
      console.log(localStorage.getItem('user'))
     
    }
    else{
      this.myForm.setErrors({...this.myForm.errors, 'ee': true });
      return;
    }
    // Process checkout data here
  
  }
  get email(){
    return this.myForm.get('email')
  }
  get pas(){
    return this.myForm.get('password')
  }

}
