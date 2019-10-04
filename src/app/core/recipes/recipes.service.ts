import { Injectable } from '@angular/core';
import { allRecipes } from '../allRecipes';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  constructor() {}

  allRecipes: Array<any> = allRecipes;
  favorites: Array<string> = [
    'Chicken Parmesan', 
    'Texas Boiled Beer Shrimp', 
    'Sicilian Roasted Chicken',
    'Slow Cooker Chicken Taco Soup'
  ];
  isExist: boolean = false;

  getRecipes() {
    const recipes: Array<object> = [];

    this.allRecipes.forEach((recipe) => {
      if (this.favorites.includes(recipe.title)) {
        recipes.push(recipe);
      }
    })
    return recipes;
  }

  addNewRecipe(title: string, descr: string, url: string, instr: string) {
    if (allRecipes.findIndex((recipe: any) => recipe.title === title) > -1) {
      this.isExist = true;
    } else {
      allRecipes.push({
        title: title,
        description: descr,
        photoUrl: url,
        ingredients: [],
        instructions: instr,
        categoryId: 'string',
        likes: 0
      });
      this.isExist = false;
    }
  }

  removeRecipe(title: string): void {
    allRecipes.forEach((recipe: any, index: number) => {
      if (recipe.title === title) {
        allRecipes.splice(index, 1);
      }
    })
  }
}