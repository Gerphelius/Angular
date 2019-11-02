import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { AllRecipesComponent } from './all-recipes-component/all-recipes.component';
import { AllRecipesRoutingModule } from './all-recipes-routing.module';
import { RecipesResolverService } from '../core/resolvers/recipes-resolver.service';


@NgModule({
  declarations: [
    AllRecipesComponent, 
  ],
  imports: [
    CommonModule,
    SharedModule,
    AllRecipesRoutingModule
  ],
  providers: [RecipesResolverService]
})
export class AllRecipesModule { }
