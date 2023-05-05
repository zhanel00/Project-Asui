import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable} from "rxjs";
import { AuthToken, User} from "./user-model";




@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private client: HttpClient) {
  }
  BASE_URL = "http://127.0.0.1:8000";

  getUser():Observable<User>{

    return this.client.get<User>(${this.BASE_URL}/login/);
  }
  login(email: string, password: string) : Observable<AuthToken>{
    return this.client.post<AuthToken>(${this.BASE_URL}/users/token/, {email, password});
  }
  logout(){
    localStorage.removeItem('token');
  }
  register(email:string, firstName:string, lastName: string, password:string){
    return this.client.post(${this.BASE_URL}/register/,
      {
        'email': email,
        'first_name':firstName,
        'last_name':lastName,
        'password':password
      });
  }
}
