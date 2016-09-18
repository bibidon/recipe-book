import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { RecipeBookComponent, environment } from './app/';
import { AppModule } from './app/app.module';
import { ShoppingListService } from "./app/shopping-list";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
