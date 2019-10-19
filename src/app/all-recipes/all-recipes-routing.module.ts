import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllRecipesComponent } from './all-recipes-component/all-recipes.component';
import { RecipeInputFormComponent } from '../shared/recipe-input-form/recipe-input-form.component';
import { RecipesListComponent } from '../shared/recipes-list/recipes-list.component';
import { RecipeDetailsComponent } from '../shared/recipe-details/recipe-details.component';
import { RecipesResolverService } from '../core/resolvers/recipes-resolver.service';
import { IdResolverService } from '../core/resolvers/id-resolver.service';

const allRecipesRoutes: Routes = [
  { path: '', redirectTo: 'all-recipes', pathMatch: 'full' },
  { path: 'all-recipes', component: AllRecipesComponent, resolve: { allRecipesArr: RecipesResolverService }, children: [
      { path: '', component: RecipesListComponent, data: { isAllRecipes: true } },
      { path: 'add-new-recipe', component: RecipeInputFormComponent, data: { btnName: 'Add recipe' } },
      { path: 'edit/:id', component: RecipeInputFormComponent, resolve: { id: IdResolverService }, data: { btnName: 'Edit recipe' } },
      { path: 'recipe/:id', component: RecipeDetailsComponent, resolve: { id: IdResolverService } },
    ] 
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(allRecipesRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AllRecipesRoutingModule {}
