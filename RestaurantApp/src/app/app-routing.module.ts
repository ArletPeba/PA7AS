import { Routes, RouterModule } from '@angular/router';
import { RecipiesComponent } from './component/recipies/recipies.component';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { RecipeStartComponent } from './component/recipies/recipe-start/recipe-start.component';
import { RecipiesDetailComponent } from './component/recipies/recipies-detail/recipies-detail.component';
import { RecipeEditComponent } from './component/recipies/recipe-edit/recipe-edit.component';
import { AuthGuard } from './guards/auth.guard';
import { SigninComponent } from './component/auth/signin/signin.component';

const routes:  Routes = [
    { path: '', redirectTo: '/recipies', pathMatch: 'full' },
    { path: 'recipies', component: RecipiesComponent, children: [
        {path: '', component: RecipeStartComponent }, 
        {path: 'new', component: RecipeEditComponent}, 
        {path: ':id', component: RecipiesDetailComponent}, 
        {path: ':id/edit', component: RecipeEditComponent}
    ]},
    { path: 'shoppinglist', component: ShoppingListComponent},
    { path: 'auth', component: SigninComponent},
    { path: 'recipies', component: RecipiesComponent, canActivate: [AuthGuard]},
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}