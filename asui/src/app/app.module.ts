import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FaIconLibrary, FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { NgxPrettyCheckboxModule } from 'ngx-pretty-checkbox';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AccountDetailsComponent } from './account-details/account-details.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    RecipeDetailsComponent,
    AccountDetailsComponent,
    SignInComponent,
    SignUpComponent,
    HomePageComponent,
    ShopListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecipesComponent,
    NavbarComponent,
    RecipeDetailsComponent,
    AccountDetailsComponent,
    SignInComponent,
    SignUpComponent,
    HomePageComponent,
    ShopListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}
