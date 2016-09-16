import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RecipeBookComponent } from "./recipe-book.component";
import { FormsModule } from "@angular/forms"

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [RecipeBookComponent],
  bootstrap: [RecipeBookComponent]
})
export class AppModule {}
