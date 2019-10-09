import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { AllRecipesComponent } from './all-recipes-component/all-recipes.component';
import { AllRecipesRoutingModule } from './all-recipes-routing.module';


@NgModule({
  declarations: [
    AllRecipesComponent, 
  ],
  imports: [
    CommonModule,
    SharedModule,
    AllRecipesRoutingModule
  ]
})
export class AllRecipesModule { }
