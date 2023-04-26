import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {Recipe} from "./recipe-model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  baseURL = "localhost:4200/recipes/"

  constructor(private client: HttpClient) { }

  getRecipe(id: number) : Observable<Recipe> {
    return this.client.get<Recipe>(this.baseURL + `${id}`);
  }

  getRecipeList() : Observable<Recipe[]> {
    return this.client.get<Recipe[]>(this.baseURL)
  }

  postRecipe(recipe: Recipe) : Observable<Recipe> {
    return this.client.post<Recipe>(this.baseURL, recipe);
  }

  updateRecipe(recipe: Recipe) : Observable<Recipe> {
    return this.client.put<Recipe>(this.baseURL + `${recipe.id}`, recipe);
  }

  deleteRecipe(id: number) : Observable<Recipe> {
    return this.client.delete<Recipe>(this.baseURL + `${id}`);
  }

  saveRecipe(recipe: Recipe) : Observable<Recipe> {
    return this.client.put<Recipe>(this.baseURL + `${recipe.id}/save/`, recipe)
  }

}
