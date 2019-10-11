import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IngredientsService } from 'src/app/core/ingredients/ingredients.service';
import { RecipesService } from 'src/app/core/recipes/recipes.service';

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

  curRecipeObj: any = this.route.snapshot.data.title;

  navToEdit(url: string, title: string) {
    this.router.navigate([url, title]);
  }

  addIngrsToPurchases() {
    this.ingredientsService.purchases = this.curRecipeObj.ingredients;
    this.router.navigate(['purchases']);
  }

  addNewFav() {
    this.recipesService.addToFav(this.curRecipeObj.title)
  }
}