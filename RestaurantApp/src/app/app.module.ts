import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { RecipiesComponent } from './component/recipies/recipies.component';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';
import { RecipiesDetailComponent } from './component/recipies/recipies-detail/recipies-detail.component';
import { RecipiesListComponent } from './component/recipies/recipies-list/recipies-list.component';
import { RecipiesItemComponent } from './component/recipies/recipies-list/recipies-item/recipies-item.component';
import { ShoppingEditComponent } from './component/shopping-list/shopping-edit/shopping-edit.component';
import { IngredientsService } from './services/ingredients.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './component/recipies/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './component/recipies/recipe-edit/recipe-edit.component';
import { RecipeService } from './services/recipe.service';
import { SigninComponent } from './component/auth/signin/signin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipiesComponent,
    ShoppingListComponent,
    RecipiesDetailComponent,
    RecipiesListComponent,
    RecipiesItemComponent,
    ShoppingEditComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [IngredientsService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
