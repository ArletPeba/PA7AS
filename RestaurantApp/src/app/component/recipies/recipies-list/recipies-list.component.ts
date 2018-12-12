import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe} from '../recipe.model';
import { RecipeService } from '../../../services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];
  private sure: Subscription

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipeChanged.subscribe((event) => {
      this.recipes = this.recipeService.getRecipes();
    })
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo:this.route});
  }

}
