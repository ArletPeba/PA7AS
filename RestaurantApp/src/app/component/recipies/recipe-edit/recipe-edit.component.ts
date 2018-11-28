import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators, NgForm } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ingredientsService } from 'src/app/services/ingredients.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  @ViewChild('f') slForm: NgForm;
  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.
      subscribe((params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        console.log(this.editMode);
        this.initForm();
      });
  }
  private initForm() {

    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    const ingredientes = new FormArray([]);
    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (const ingredient of recipe.ingredients) {
          ingredientes.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/[^1-9]+[0-9]*$/)
              ])

            })
          )
        }
      }

      this.recipeForm = new FormGroup({
        'name': new FormControl(recipeName, Validators.required),
        'imagePath': new FormControl(recipeImagePath, Validators.required),
        'description': new FormControl(recipeDescription, Validators.required),
        'ingredientes': ingredientes
      });
    }
  }
  onAddIngrediente() {
    (<FormArray>this.recipeForm.get('ingredientes')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )


  }
  onSubmit() {
    //const recipe = this.recipeForm.value;
    const newRecipe = new Recipe(this.recipeForm.value.name, this.recipeForm.value.description, this.recipeForm.value.imagePath, this.recipeForm.value.ingredientes);

    //const newRecipe = new Recipe(recipe.name, recipe.description, recipe.imagePath, recipe.ingredients);
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, newRecipe);
    } else {
      this.recipeService.addRecipe(newRecipe);
    }
  }
  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get("ingredientes")).removeAt(index);
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
