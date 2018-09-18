import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {
  //@Output() recipeItem = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'Just a ducking test',
    'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2Fgluten-free-cookbook%2Fpepperoni-pizza-ck-x.jpg%3Fitok%3DNWreajsZ&w=700&q=85')
   ]

  constructor() { }

  ngOnInit() {
  }

}
