import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites-component/favorites.component';
import { RecipeInputFormComponent } from '../shared/recipe-input-form/recipe-input-form.component';
import { RecipesListComponent } from '../shared/recipes-list/recipes-list.component';
import { IdResolverService } from '../core/resolvers/id-resolver.service';
import { RecipeDetailsComponent } from '../shared/recipe-details/recipe-details.component';
import { FavoritesResolverService } from '../core/resolvers/favorites-resolver.service';

const favoritesRoutes: Routes = [
  { path: '', redirectTo: 'favorites', pathMatch: 'full' },
  { path: 'favorites', component: FavoritesComponent, resolve: { favRecipesArr: FavoritesResolverService }, children: [
      { path: '', component: RecipesListComponent, data: { isAllRecipes: false } },
      { path: 'edit/:id', component: RecipeInputFormComponent, resolve: { id: IdResolverService }, data: { btnName: 'Edit recipe' } },
      { path: 'recipe/:id', component: RecipeDetailsComponent, resolve: { id: IdResolverService } },
    ] 
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(favoritesRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class FavoritesRoutingModule { }
