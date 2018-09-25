import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers:[RecipeService]
})
export class RecipiesComponent implements OnInit {
recipeSelected: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
