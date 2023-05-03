import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, Observable} from "rxjs";
import { User } from './user-model'
import { Recipe } from './recipe-model'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private client: HttpClient) { }

  baseURL = "localhost:4200/user/"

  private currentUserSubject = new BehaviorSubject<any>(null);

  //some logic for authentication which will probably be moved to the authorization service
  login(user: User): Observable<any> {
    return this.client.post<any>(this.baseURL + 'login/', user).pipe(
      // map((user: { email: this.email,
      //   password: this.password }) => {
      //   localStorage.setItem('token', user.token);
      //
      //   this.currentUserSubject.next(user.user); // <-- pump the value in here
      //
      //   return user.user;
      // })
    );
  }

  getCurrentUser(): Observable<any> {
    return this.currentUserSubject.asObservable();
  }

  updateUserInfo(user: User): Observable<User> {
    return this.client.put<User>(this.baseURL, user);
  }

  removeProfilePicture(user: User): Observable<User> {
    return this.client.put<User>(this.baseURL, user);
  }

  uploadProfilePicture(image: File): Observable<Response> {
    const formData = new FormData();

    formData.append('image', image);

    return this.client.put<Response>(this.baseURL + 'upload-image', formData);
  }

  getSavedRecipes(): Observable<Recipe[]> {
    return this.client.get<Recipe[]>(this.baseURL)
  }

}
