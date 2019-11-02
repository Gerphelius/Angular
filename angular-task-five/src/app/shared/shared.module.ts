import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeCardComponent } from './recipes-list/recipe-card/recipe-card.component';
import { RecipeInputFormComponent } from './recipe-input-form/recipe-input-form.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ShadowDirective } from './directives/shadow.directive';
import { StrLengthControlPipe } from './pipes/str-length-control.pipe';
import { RouterModule } from '@angular/router';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RecipesListComponent, 
    RecipeCardComponent, 
    ShadowDirective, 
    StrLengthControlPipe, 
    RecipeInputFormComponent, RecipeDetailsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    RecipesListComponent,
    RecipeCardComponent,
    RecipeInputFormComponent 
  ],
})
export class SharedModule { }
