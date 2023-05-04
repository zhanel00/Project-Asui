import {Component, OnInit} from '@angular/core';
import {Recipe, recipes, Review} from "../recipe-model";
import { ActivatedRoute } from "@angular/router";
import { RecipeService } from "../recipe.service";
import { UserService } from "../user.service";
import { Observable } from "rxjs";
import { Ingredient } from "../recipe-model";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe : Recipe;
  loaded : boolean;
  saved : boolean;
  currentUser$: Observable<any> | undefined;
  review: Review;

  constructor( private route : ActivatedRoute,
               private recipeService : RecipeService,
               private userService : UserService,
  ) {
    this.recipe = {} as Recipe;
    // this.recipe = recipes[0];
    this.loaded = true;
    this.saved = false;
    this.review = {} as Review;
  }
  starRating = 3.5;
  checkAllCheckBox(ev: any) {
    this.recipe.ingredients.forEach(x => x.isChecked = ev.target.checked);
  }
  isAllCheckBoxChecked() {
    return this.recipe.ingredients.every(r => r.isChecked);
  }
  saveRecipe() {
    this.recipeService.saveRecipe(this.recipe).subscribe(recipe => {
      this.saved = true;
    });
    window.alert('You saved this recipe');
  }
  onRateChange(rating: number) {
    // this.review.recipe_id = this.recipe.id;
    // this.review.rating = rating;
    this.recipeService.postRating(this.recipe.id, rating).subscribe(rating => {
      this.starRating = rating
    });
  }
  addItemToShoppingList() {
    let shopList: Ingredient[];
    shopList = this.recipe.ingredients.filter(ingredient => ingredient.isChecked);
    this.recipeService.addToShoppingList(shopList).subscribe();
    window.alert('You added this item to the shopping list');
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.recipeService.getRecipe(id).subscribe((recipe) => {
        this.recipe = recipe;
        this.loaded = true;
        this.starRating = this.recipe.average_rating;
      })
    })
    // this.recipe = recipes[0];
    //   this.route.paramMap.subscribe((params) => {
    //     const id = Number(params.get('id'));
    //     this.loaded = false;
    //     this.recipe = recipes[id - 1];
    //     this.loaded = true;
    //     this.starRating = this.recipe.average_rating;
    //   })
    //   this.starRating = this.recipe.average_rating;
    //   this.currentUser$ = this.userService.getCurrentUser();
    // }
  }
}
