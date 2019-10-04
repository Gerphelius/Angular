import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeCardComponent } from './recipes-list/recipe-card/recipe-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShadowDirective } from './recipes-list/recipe-card/directives/shadow.directive';
import { StrLengthControlPipe } from './recipes-list/recipe-card/pipes/str-length-control.pipe';

@NgModule({
  declarations: [
    RecipesListComponent, 
    RecipeCardComponent, 
    ShadowDirective, 
    StrLengthControlPipe
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    RecipesListComponent,
    RecipeCardComponent 
  ],
})
export class SharedModule { }
