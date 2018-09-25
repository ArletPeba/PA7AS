import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';


@Component({
  selector: 'app-recipies-item',
  templateUrl: './recipies-item.component.html',
  styleUrls: ['./recipies-item.component.css']
})
export class RecipiesItemComponent implements OnInit {
@Input() recipe:Recipe;
@Output() recipeSelected=new EventEmitter<void>(); //Para que pueda ser reconocido
  constructor() { }

  ngOnInit() {
  }
onSelected(){
  this.recipeSelected.emit();
}
}
