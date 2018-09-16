import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('A test recipe','this is a simply test',
    'https://www.google.co.uk/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwibkv3R1rHdAhVlUt8KHcKYBlsQjRx6BAgBEAU&url=https%3A%2F%2Fwww.elementstark.com%2Fwoocommerce-extension-demos%2Fproduct%2Fpizza-builder%2F&psig=AOvVaw0m7SwFX2g0ub8-ttofyLUG&ust=1536711490420974')
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
