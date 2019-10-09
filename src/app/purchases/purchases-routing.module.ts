import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PurchasesComponent } from './purchases-component/purchases.component';
import { IngredientsResolverService } from '../core/resolvers/ingredients-resolver.service';

const purchasesRoutes: Routes = [
  { path: '', component: PurchasesComponent, resolve: { ingredientsArr: IngredientsResolverService } },
];

@NgModule({
  imports: [
    RouterModule.forChild(purchasesRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class PurchasesRoutingModule { }
