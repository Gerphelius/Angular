import { Component } from '@angular/core';
import { allRecipes } from 'src/app/core/allRecipes';
import { RecipesService } from 'src/app/core/recipes/recipes.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent {
  allRecipes: Array<object> = allRecipes;
  addNewRecipe = this.recipesService.addNewRecipe;
  isExist: boolean = this.recipesService.isExist;

  constructor(private readonly recipesService: RecipesService) { }
}
