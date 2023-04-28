import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['',Validators.required],
      password:['', Validators.required]
    })
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye": this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text": this.type = "password";

  }

  onSubmit(){
    if(this.loginForm.valid){
      // Send the obj to db
      console.log(this.loginForm.value)
    }
    else{
      //throw the error using toaster and with required fields
      console.log();
      this.validateAllFormFields(this.loginForm);
      alert("Please correct");
    }
  }

  private validateAllFormFields(formGroup:FormGroup){
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl){
        control.markAsDirty({onlySelf: true});
      } else if (control instanceof FormGroup){
        this.validateAllFormFields(control)
      }
    })
  }
}
