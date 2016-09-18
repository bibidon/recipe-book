import { Component, OnInit } from '@angular/core';

import { RecipeListComponent } from "./recipe-list";
import { RecipeDetailComponent } from "./recipe-detail";
import { Recipe } from "./recipe";
import { RecipeService } from "./recipe.service";

@Component({
  moduleId: module.id,
  selector: 'rb-recipes',
  templateUrl: 'recipes.component.html',
  directives: [RecipeListComponent, RecipeDetailComponent],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe:Recipe;

  constructor() {
  }

  ngOnInit() {
  }
}
