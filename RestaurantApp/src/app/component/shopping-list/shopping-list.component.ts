import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ingredientsService } from '../../services/ingredients.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients : Ingredient[];
  private subscriptionvar;
  constructor( private ingredientService:ingredientsService) { }

  ngOnInit() {
   this.ingredients = this.ingredientService.getIngredients();
   this.subscriptionvar = this.ingredientService.ingredientsChanged.subscribe(((ingredients: Ingredient[]) => {this.ingredients = ingredients;}));
  }

  ngOnDestroy(){
    this.subscriptionvar.unsubscribe();
  }
  onEditItem(index:number){
    this.ingredientService.startedEditing.next(index);

  }
}