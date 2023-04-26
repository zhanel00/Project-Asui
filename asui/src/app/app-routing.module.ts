import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipeDetailsComponent} from "./recipe-details/recipe-details.component";
import {AccountDetailsComponent} from "./account-details/account-details.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path: 'home', component: HomePageComponent},
  { path: 'recipe/:id', component: RecipeDetailsComponent},
  { path: 'signIn', component:SignInComponent},
  { path: 'signUp', component:SignUpComponent},
  { path: 'recipe/:id', component: RecipeDetailsComponent },
  { path: 'user/:id', component: AccountDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
