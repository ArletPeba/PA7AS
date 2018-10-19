import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ingredientsService{
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private  ingredients : Ingredient [] = [
        new Ingredient('Tomatoes', 5),
        new Ingredient('Apples', 3)
      ];

      getIngredients(){
          return this.ingredients.slice();
      }
      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
       // console.log(this.ingredients);
      }

      
      //Una vez obtenidos se debene guardar en el arreglo, cpn un foreach desde donde se obtendran con una constante i
      addIngredients(auxIngredients: Ingredient[]){
      
        for (const i of auxIngredients){
        
       const found = auxIngredients.find( ing => ing.name === i.name );
        // console.log(found.amount);
         if (found.amount>0){
           var newcant= i.amount+found.amount;
           this.ingredients.push(i.amount[newcant]);
           console.log(newcant);
         }else{        
          console.log('agregado en la posicion '+this.ingredients.push(i));
        }
      }}
}