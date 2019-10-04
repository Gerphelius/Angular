import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasesComponent } from './purchases-component/purchases.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PurchasesListComponent } from './purchases-component/purchases-list/purchases-list.component';

@NgModule({
  declarations: [
    PurchasesComponent,
    PurchasesListComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    PurchasesComponent
  ]
})
export class PurchasesModule { }
