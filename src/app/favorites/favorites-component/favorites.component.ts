import { Component } from '@angular/core';
import { RecipesService } from 'src/app/core/recipes/recipes.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  favoriteRecipes: Array<string>;

  constructor(private readonly recipesService: RecipesService) {
    this.favoriteRecipes = recipesService.favorites; 
  }

  recipes: Array<object> = this.recipesService.getRecipes();
}
