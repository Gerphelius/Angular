import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

const appRoutes: Routes = [
  { path: 'all-recipes', loadChildren: './all-recipes/all-recipes.module#AllRecipesModule' },
  { path: 'favorites', loadChildren: './favorites/favorites.module#FavoritesModule' },
  { path: 'purchases', loadChildren: './purchases/purchases.module#PurchasesModule' },
  { path: '', redirectTo: 'all-recipes', pathMatch: 'full' },
  { path: '**', redirectTo: 'all-recipes' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,
      { enableTracing: true }
    ),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
