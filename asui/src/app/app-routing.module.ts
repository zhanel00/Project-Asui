import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipeDetailsComponent} from "./recipe-details/recipe-details.component";
import {AccountDetailsComponent} from "./account-details/account-details.component";

const routes: Routes = [
  { path: 'recipe/:id', component: RecipeDetailsComponent },
  { path: 'user/:id', component: AccountDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
