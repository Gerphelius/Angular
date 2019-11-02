import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IngredientsService } from 'src/app/core/ingredients/ingredients.service';
import { RecipesService } from 'src/app/core/recipes/recipes.service';
import { FullRecipe } from '../interfaces/full-recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})

export class RecipeDetailsComponent {
  constructor(
    private readonly route: ActivatedRoute, 
    private router: Router,
    private ingredientsService: IngredientsService,
    private recipesService: RecipesService
  ) { }

  curRecipeObj: FullRecipe = this.route.snapshot.data.id;

  navToEdit(url: string, id: string) {
    this.router.navigate([url, id]);
  }

  addIngrsToPurchases() {
    this.ingredientsService.addToPurchases(this.curRecipeObj.ingredients);
    this.router.navigate(['purchases']);
  }

  addNewFav() {
    this.recipesService.addToFav(this.curRecipeObj.id);
    this.router.navigate(['favorites']);
  }
}