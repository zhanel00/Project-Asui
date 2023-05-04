import { Component } from '@angular/core';
import { Recipe, recipes } from "../recipe-model";
import { RecipeService } from "../recipe.service"
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  recipes: Recipe[] = [];
  loaded: boolean;
  constructor(private route: ActivatedRoute,)
  {
    this.recipes = [];
    this.loaded = true;
  }
}
