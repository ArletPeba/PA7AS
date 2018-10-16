import { Routes, RouterModule} from '@angular/router';
import { RecipiesComponent } from './component/recipies/recipies.component';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
const routes: Routes=[
    {
path:'', redirectTo: '/recipes', pathMatch: 'full' //Cuando esté vacio '', y no busque nada, 
},
{
    path: 'recipes', component: RecipiesComponent
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