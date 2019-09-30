import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasesComponent } from './purchases-component/purchases.component';

@NgModule({
  declarations: [
    PurchasesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PurchasesComponent
  ]
})
export class PurchasesModule { }
