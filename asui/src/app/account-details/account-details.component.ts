import { Component } from '@angular/core';
import {user, User} from "../user-model";
import {AbstractControl, FormGroup, FormBuilder, Validators} from "@angular/forms";
import {OldPwdValidators} from "./pwd-validator.validators";

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {
  user : User;
  loaded: boolean;
  formGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    this.user = user;
    this.loaded = true;
    this.formGroup = fb.group({
      'email': ['',Validators.required],
      'oldPwd': ['',Validators.required,OldPwdValidators.shouldBe1234],
      'newPwd': ['',Validators.required],
      'confirmPwd': ['',Validators.required]
    }, {
      validator: OldPwdValidators.matchPwds
    });
  }

  get email(){
    return this.formGroup.get('email');
  }

  get oldPwd(){
    return this.formGroup.get('oldPwd');
  }

  get newPwd(){
    return this.formGroup.get('newPwd');
  }

  get confirmPwd(){
    return this.formGroup.get('confirmPwd');
  }

}
