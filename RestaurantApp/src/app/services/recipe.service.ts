import { Recipe } from '../component/recipies/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { IngredientsService } from './ingredients.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    //recipeSelected = new EventEmitter<Recipe>();
    recipeChanged = new Subject<Recipe[]>();
    
    recipes: Recipe[] = [
        new Recipe('HotCakes', 'Just another ducking test', 'https://www.cocinavital.mx/wp-content/uploads/2017/08/hot-cakes-con-avena-y-amaranto-e1525899524738.jpg', [new Ingredient ('Harina', 1), new Ingredient('Huevos', 2)]),
        new Recipe('Huevos a la mexicana', 'Just another ducking test', 'https://mexicoenmicocina.com/wp-content/uploads/2017/05/3-ima-3.jpg', [new Ingredient ('Huevos', 5), new Ingredient('Jitomate', 3), new Ingredient('chile', 3)]),
        new Recipe('Enchiladas Suizas', 'Just another ducking test', 'https://www.cocinavital.mx/wp-content/uploads/2018/06/enchiladas_suizas.jpg', [new Ingredient ('Tortillas', 5),new Ingredient ('pollo', 1)])
    ];

    constructor(private ingredientsService: IngredientsService){}

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.ingredientsService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipe){
        this.recipes[index] = recipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
}