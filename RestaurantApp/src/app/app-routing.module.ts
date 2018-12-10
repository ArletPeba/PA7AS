import { Routes, RouterModule} from '@angular/router';
import { RecipiesComponent } from './component/recipies/recipies.component';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';

import { RecipiesDetailComponent } from './component/recipies/recipies-detail/recipies-detail.component';
import { RecipeStartComponent } from './component/recipies/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './component/recipies/recipe-edit/recipe-edit.component';
import { AuthGuard } from './guards/auth.guard';
import { SigninComponent } from './auth/signin/signin.component';

const routes: Routes=[
    {
path:'', redirectTo: '/recipes', pathMatch: 'full' //Cuando esté vacio '', y no busque nada, 
},

{
    path: 'recipes', component: RecipiesComponent,canActivate: [AuthGuard], children:[

       { path:'', component:RecipeStartComponent},
       {path: 'new', component:RecipeEditComponent},
       { path: ':id', component: RecipiesDetailComponent}, //Los dos puntos son para indicar que es un atributo
        {path: ':id/edit', component:RecipeEditComponent},
        
      

    ]
},
{   
    path: 'Shoppinglist', component: ShoppingListComponent
   
},
{path: 'Signin', component: SigninComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}