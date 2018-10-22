import { Routes, RouterModule} from '@angular/router';
import { RecipiesComponent } from './component/recipies/recipies.component';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';

import { RecipiesDetailComponent } from './component/recipies/recipies-detail/recipies-detail.component';
import { RecipeStartComponent } from './component/recipies/recipe-start/recipe-start.component';

const routes: Routes=[
    {
path:'', redirectTo: '/recipes', pathMatch: 'full' //Cuando esté vacio '', y no busque nada, 
},
{
    path: 'recipes', component: RecipiesComponent, children:[
       { path:'', component:RecipeStartComponent},
       { path: ':id', component: RecipiesDetailComponent} //Los dos puntos son para indicar que es un atributo

    ]
},
{
    path: 'Shoppinglist', component: ShoppingListComponent
}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}