import {Component, OnInit} from '@angular/core';
import { Recipe } from "../recipe-model";
import { ActivatedRoute } from "@angular/router";
import { RecipeService } from "../recipe.service";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe : Recipe;
  loaded : boolean;

  constructor( private route : ActivatedRoute,
               private recipeService : RecipeService
  ) {
    this.recipe = {} as Recipe;
    this.loaded = true;
  }
  starRating = 3.5;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.recipeService.getRecipe(id).subscribe((recipe) => {
        this.recipe = recipe;
        this.loaded = true;
        this.starRating = this.recipe.rating;
      })
    })
  }
}
