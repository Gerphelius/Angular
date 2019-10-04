import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AllRecipesModule } from './all-recipes/all-recipes.module';
import { FavoritesModule } from './favorites/favorites.module';
import { PurchasesModule } from './purchases/purchases.module';
import { RecipesService } from './core/recipes/recipes.service';
import { IngredientsService } from './core/ingredients/ingredients.service';

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
  ],
  providers: [
    RecipesService,
    IngredientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
