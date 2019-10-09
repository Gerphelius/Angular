import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './favorites-component/favorites.component';
import { RecipeInputFormComponent } from '../shared/recipe-input-form/recipe-input-form.component';
import { RecipesListComponent } from '../shared/recipes-list/recipes-list.component';

const favoritesRoutes: Routes = [
  { path: '', component: FavoritesComponent, children: [
      { path: '', component: RecipesListComponent },
      { path: 'edit/:title', component: RecipeInputFormComponent, data: { btnName: 'Edit recipe' } }
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
