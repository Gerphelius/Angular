import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites-component/favorites.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FavoritesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    FavoritesComponent
  ]
})
export class FavoritesModule { }
