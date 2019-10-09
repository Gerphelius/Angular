import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasesComponent } from './purchases-component/purchases.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PurchasesListComponent } from './purchases-component/purchases-list/purchases-list.component';
import { PurchasesRoutingModule } from './purchases-routing.module';

@NgModule({
  declarations: [
    PurchasesComponent,
    PurchasesListComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    PurchasesRoutingModule
  ],
  exports: [
    PurchasesComponent
  ]
})
export class PurchasesModule { }
