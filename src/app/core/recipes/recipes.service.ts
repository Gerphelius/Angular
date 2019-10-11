import { Injectable } from '@angular/core';
import { allRecipes } from '../allRecipes';
import { Recipe } from 'src/app/shared/interfaces/recipe-interface';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  allRecipes: Array<Recipe> = allRecipes;
  favorites: Array<string> = [
    'Chicken Parmesan', 
    'Texas Boiled Beer Shrimp', 
    'Sicilian Roasted Chicken',
    'Slow Cooker Chicken Taco Soup'
  ];

  getFavRecipes() {
    const recipes: Array<Recipe> = [];

    this.allRecipes.forEach((recipe) => {
      if (this.favorites.includes(recipe.title)) {
        recipes.push(recipe);
      }
    })
    return recipes;
  }

  addToFav(title: string) {
    if (this.favorites.includes(title)) {
      alert('This recipe already in favorites!')
    } else {
      this.favorites.push(title);
    }
  }

  getRecipesArr() {
    return this.allRecipes;
  }

  getRecipeWithTitle(title: string) {
    return this.allRecipes.find((recipe: Recipe) => recipe.title === title);
  }

  addNewRecipe(newRecipe: Recipe) {
    newRecipe.categoryId = '';
    newRecipe.likes = 0;
    this.allRecipes.push(newRecipe);
  }

  editRecipe(curRecipeObj: Recipe, editedRecipe: Recipe) {
    curRecipeObj.title = editedRecipe.title;
    curRecipeObj.description = editedRecipe.description;
    curRecipeObj.photoUrl = editedRecipe.photoUrl;
    curRecipeObj.ingredients = editedRecipe.ingredients;
    curRecipeObj.instructions = editedRecipe.instructions;
  }

  removeRecipe(title: string): void {
    this.allRecipes.forEach((recipe: Recipe, index: number) => {
      if (recipe.title === title) {
        this.allRecipes.splice(index, 1);
        return;
      }
    })
  }
}