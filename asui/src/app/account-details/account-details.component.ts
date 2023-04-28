import { Component } from '@angular/core';
import {user, User} from "../user-model";
import {AbstractControl, FormGroup, FormBuilder, Validators} from "@angular/forms";
import {OldPwdValidators} from "./pwd-validator.validators";
import {UserService} from "../user.service";

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {
  user : User;
  newUserInfo: User;
  loaded: boolean;
  formGroup: FormGroup;
  file: string = '';
  constructor(
                private fb: FormBuilder,
                private userService: UserService,
              ) {
    this.user = user;
    this.newUserInfo = user;
    this.loaded = true;
    this.formGroup = fb.group({
      'email': ['',Validators.required],
      'oldPwd': ['',Validators.required,OldPwdValidators.shouldBe1234],
      'newPwd': ['',Validators.required],
      'confirmPwd': ['',Validators.required],
      'firstName':[''],
      'lastName': [''],
      'userName': ['', Validators.required],
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

  get firstName(){
    return this.formGroup.get('firstName');
  }

  get userName(){
    return this.formGroup.get('userName');
  }

  removeProfilePicture() {
    this.user.profile_pic_url = "";
    this.userService.removeProfilePicture(this.user).subscribe(user => {
      this.user = user;
    })
  }

  onFileChange(event: any) {
    const files = event.target.files as FileList;

    if (files.length > 0) {
      const _file = URL.createObjectURL(files[0]);
      this.file = _file;
      this.resetInput();
      this.user.profile_pic_url = this.file;
      this.userService.uploadProfilePicture(files[0]).subscribe();
    }

  }

  resetInput(){
    const input = document.getElementById('avatar') as HTMLInputElement;
    if(input){
      input.value = "";
    }
  }

  updateUserInfo() {
    this.user = this.newUserInfo
    this.newUserInfo.first_name = this.formGroup.get('firstName')!.value
    this.newUserInfo.last_name = this.formGroup.get('lastName')!.value
    this.newUserInfo.email = this.formGroup.get('email')!.value
    this.newUserInfo.username = this.formGroup.get('username')!.value
    this.newUserInfo.password = this.formGroup.get('newPwd')!.value
    this.userService.updateUserInfo(this.newUserInfo).subscribe( user => {
      // this.user.first_name = user.first_name;
      // this.user.last_name = user.last_name;
      this.user = user;
    })
  }

}
