import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites-component/favorites.component';
import { SharedModule } from '../shared/shared.module';
import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesResolverService } from '../core/resolvers/favorites-resolver.service';

@NgModule({
  declarations: [
    FavoritesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FavoritesRoutingModule
  ],
  providers: [
    FavoritesResolverService
  ]
})
export class FavoritesModule { }
