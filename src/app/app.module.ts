import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"

import { RecipeBookComponent } from "./recipe-book.component";
import { HeaderComponent } from "./header.component";
import { DropdownDirective } from "./dropdown.directive";
import { ShoppingListAddComponent } from "./shopping-list/shopping-list-add.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item.component";
import { RecipeStartComponent } from "./recipes/recipe-start.component";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { RecipeService } from "./recipes/recipe.service";
//import {APP_ROUTES_PROVIDERS} from "./app.routes";
import { routing } from "./app.routing";

@NgModule({
  declarations: [
    RecipeBookComponent,
    HeaderComponent,
    DropdownDirective,
    ShoppingListAddComponent,
    ShoppingListComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeItemComponent,
    RecipeStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  bootstrap: [
    RecipeBookComponent
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    //APP_ROUTES_PROVIDERS
  ]
})
export class AppModule {}
