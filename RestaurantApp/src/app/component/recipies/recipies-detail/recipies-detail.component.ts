import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router,Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipies-detail',
  templateUrl: './recipies-detail.component.html',
  styleUrls: ['./recipies-detail.component.css']
})
export class RecipiesDetailComponent implements OnInit {
//@Input() recipe: Recipe;}
recipe: Recipe;
id: number;
  constructor(private recipeService: RecipeService, 
              private route: ActivatedRoute){
  }

  ngOnInit() {
    this.route.params.subscribe((param:Params)=>{
      this.id=+param['id']; //el + lo convierte el textoe n numero entero
      this.recipe=this.recipeService.getRecipe(this.id);
    });
  }


  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
