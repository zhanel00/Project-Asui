import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent} from "./recipes/recipes.component";
import {RecipeDetailsComponent} from "./recipe-details/recipe-details.component";
import {AccountDetailsComponent} from "./account-details/account-details.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {ShopListComponent} from "./shop-list/shop-list.component";

const routes: Routes = [
  { path: 'recipes', component: RecipesComponent},
  { path: '', redirectTo:'/recipes', pathMatch:'full'},
  { path: 'recipes/:id', component: RecipeDetailsComponent},
  { path: 'signIn', component: SignInComponent},
  { path: 'signUp', component: SignUpComponent},
  { path: 'user', component: AccountDetailsComponent},
  { path: 'users/:id/shoplist', component: ShopListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
