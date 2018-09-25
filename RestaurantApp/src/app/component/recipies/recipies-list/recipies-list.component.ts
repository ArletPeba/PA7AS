import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe} from '../recipe.model';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>(); //mandar al objeto seleccionado 
  recipes: Recipe[];
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this. recipes=this.recipeService.getRecipes();
  }
  onRecipeSelected(recipe:Recipe){
    console.log(recipe);
    this.recipeWasSelected.emit(recipe); //Emite la receta

  }
}
