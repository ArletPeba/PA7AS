import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../../../services/recipe.service';


@Component({
  selector: 'app-recipies-item',
  templateUrl: './recipies-item.component.html',
  styleUrls: ['./recipies-item.component.css']
})
export class RecipiesItemComponent implements OnInit {
@Input() recipe:Recipe;
@Input() index: number;
  /*constructor(private recipeService: RecipeService) {

   } */

  ngOnInit() {
  }

}
