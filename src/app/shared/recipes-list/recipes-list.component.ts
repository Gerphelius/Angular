import { Component } from '@angular/core';
import { RecipesService } from 'src/app/core/recipes/recipes.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../interfaces/recipe-interface';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {
  constructor(private readonly recipesService: RecipesService, private route: ActivatedRoute) {
    if (route.snapshot.data.isAllRecipes) {
      this.recipes = this.route.snapshot.data.allRecipesArr;
    } else {
      this.recipes = this.recipesService.getFavRecipes();
    }
  }
  recipes: Array<Recipe>;
}
