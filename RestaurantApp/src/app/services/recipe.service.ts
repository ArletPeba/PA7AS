import {Recipe} from '../component/recipies/recipe.model'
import {EventEmitter, Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ingredientsService } from './ingredients.service';
@Injectable() //Para poder agregar un servicio dentro de otro servicio

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
 private recipes: Recipe[] = [
    new Recipe('Test recipe 1', 'Just a ducking test 1',
    'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2Fgluten-free-cookbook%2Fpepperoni-pizza-ck-x.jpg%3Fitok%3DNWreajsZ&w=700&q=85', [new Ingredient('bread',2), new Ingredient('cheeses', 5)]),
    new Recipe('Test recipe 2', 'Just a ducking test 2',
    'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2Fgluten-free-cookbook%2Fpepperoni-pizza-ck-x.jpg%3Fitok%3DNWreajsZ&w=700&q=85', [new Ingredient('apple',2)]),
    new Recipe('Test recipe 3', 'Just a ducking test 3',
    'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2Fgluten-free-cookbook%2Fpepperoni-pizza-ck-x.jpg%3Fitok%3DNWreajsZ&w=700&q=85', [new Ingredient('orange',2), new Ingredient('salt', 5)])
   ]
   //Crear constructor para utilizar el ingredientsService
   constructor(private ingredientsService: ingredientsService){}
   getRecipes(){
       return this.recipes.slice();
   }
   //Método para invocar desde la vista
   addIngredientsToShoppingList(ingredients: Ingredient[]){
       this.ingredientsService.addIngredients(ingredients);
   }
}