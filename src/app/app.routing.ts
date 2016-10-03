import {RouterModule, Routes} from '@angular/router';

export const APP_ROUTES: Routes = [
    {path: '', loadChildren: 'app/core.module#CoreModule'},
    {path: 'recipes', loadChildren: 'app/recipes/recipes.module#RecipesModule'},
    {path: 'shopping-list', loadChildren: 'app/shopping-list/shopping-list.module#ShoppingListModule'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
