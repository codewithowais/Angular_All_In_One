import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

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
    if(this.myForm.value){

    console.log(this.myForm.value)

    }
    // Process checkout data here
  
  }

}
