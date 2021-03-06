import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { IngredientsService } from '../../../services/ingredients.service';
import { Ingredient } from '../../../shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  private subscription: Subscription;
  editedItem: Ingredient;
  @ViewChild('f')slForm: NgForm;
  editMode = false;
  indexEditedItem: number;
  constructor(private ingredientService: IngredientsService) {

  }

  ngOnInit() {
    this.subscription = this.ingredientService.startedEditing.subscribe( (index: number) => { 
      this.indexEditedItem = index;
      this.editedItem = this.ingredientService.getIngredient(index);
      this.editMode = true;
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onAddItem(form: NgForm){
    // const name = this.nameInputRef.nativeElement.value;
    // const amount =  this.amountInputRef.nativeElement.value;
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode){
      this.ingredientService.updateIngredient(this.indexEditedItem, newIngredient);
    } else {
      this.ingredientService.addIngredient(newIngredient);
    }
    this.clear();
  }

  onDeletedItem(form: NgForm){
    if (this.editMode){
      this.ingredientService.deletedIngredient(this.indexEditedItem);
      this.clear();
    } else {
      
    }
    this.editMode = false;
  }

  clear(){
    this.slForm.reset();
  }
}
