import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';

import { AllRecipesModule } from './all-recipes/all-recipes.module';
import { FavoritesModule } from './favorites/favorites.module';
import { PurchasesModule } from './purchases/purchases.module';
import { AppRoutingModule } from './app-routing.module';

import { RecipesService } from './core/recipes/recipes.service';
import { IngredientsService } from './core/ingredients/ingredients.service';
import { AllRecipesRoutingModule } from './all-recipes/all-recipes-routing.module';
import { FavoritesRoutingModule } from './favorites/favorites-routing.module';
import { PurchasesRoutingModule } from './purchases/purchases-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AllRecipesModule,
    FavoritesModule,
    PurchasesModule,
    AppRoutingModule,
    AllRecipesRoutingModule,
    FavoritesRoutingModule,
    PurchasesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RecipesService,
    IngredientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
