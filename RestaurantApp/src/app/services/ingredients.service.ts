import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class ingredientsService{
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  startedEditing = new Subject <number>();
  private  ingredients : Ingredient [] = [
        new Ingredient('Tomatoes', 5),
        new Ingredient('Apples', 3)
      ];

      getIngredients(){
          return this.ingredients.slice();
      }
      getIngredient(index:number){
        return this.ingredients[index];
      }
      updateIngredient(index:number, ingredient: Ingredient){
        this.ingredients[index]=ingredient;
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
       // console.log(this.ingredients);
      }

      
      //Una vez obtenidos se debene guardar en el arreglo, cpn un foreach desde donde se obtendran con una constante i
      addIngredients(auxIngredients: Ingredient[]){
      
        for (const i of auxIngredients){
        
       const found =this.ingredients.find( Ingredient => Ingredient.name === i.name ); //Buscar a i que es el objeto de la receta en el arreglo
        console.log(found);
         if (found === undefined){
          this.ingredients.push(i);}
          else{
            found.amount=found.amount+i.amount;
          }
         }
        
        this.ingredientsChanged.emit(this.ingredients.slice());
        }
      }
