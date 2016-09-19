import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

import { HeaderComponent } from "./header.component";

@Component({
  moduleId: module.id,
  selector: 'recipe-book-app',
  templateUrl: 'recipe-book.component.html',
  directives: [HeaderComponent, ROUTER_DIRECTIVES]
})
export class RecipeBookComponent {
}
