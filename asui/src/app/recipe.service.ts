import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import { Recipe } from "./recipe-model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  baseURL = "localhost:4200/recipe"

  constructor(private client: HttpClient) { }

  getRecipe(id: number) : Observable<Recipe> {
    return this.client.get<Recipe>(this.baseURL + `/${id}`);
  }

}
