import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

import {RecipeListComponent} from "./recipe-list";
import {RecipeService} from "./recipe.service";


@Component({
    moduleId: module.id,
    selector: 'rb-recipes',
    templateUrl: 'recipes.component.html',
    directives: [RecipeListComponent, ROUTER_DIRECTIVES],
    providers: [RecipeService]
})
export class RecipesComponent {
}
