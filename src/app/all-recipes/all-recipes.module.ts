import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllRecipesComponent } from './all-recipes-component/all-recipes.component';
import { AddRecipeComponent } from './add-recipe-component/add-recipe.component'
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AllRecipesComponent, 
    AddRecipeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    AllRecipesComponent
  ],
})
export class AllRecipesModule { }
