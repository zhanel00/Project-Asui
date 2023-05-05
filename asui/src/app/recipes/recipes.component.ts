import { Component } from '@angular/core';
import { Recipe, recipes } from "../recipe-model";
import { ActivatedRoute } from "@angular/router";
import { RecipeService } from "../recipe.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  recipes: Recipe[] = [];
  loaded: boolean;
  searchText: string = "";
  constructor( private route: ActivatedRoute,
               private recipeService : RecipeService,)
  {
    this.recipes = recipes;
    this.loaded = true;
  }
  ngOnInit(): void {
    this.recipes = recipes;
  }
  Search() {
    if (this.searchText !== "") {
      let searchValue = this.searchText.toLocaleLowerCase();
      this.recipes = this.recipes.filter(Recipe => {
        return Recipe.title.toLocaleLowerCase().match(searchValue);
      });
    }
    else {
      this.ngOnInit();
    }
  }
}
