import { Injectable } from '@angular/core';
import { allRecipes } from '../allRecipes';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  allRecipes: Array<any> = allRecipes;
  favorites: Array<string> = [
    'Chicken Parmesan', 
    'Texas Boiled Beer Shrimp', 
    'Sicilian Roasted Chicken',
    'Slow Cooker Chicken Taco Soup'
  ];
  isRecipeExist: boolean = false;

  getFavRecipes() {
    const recipes: Array<any> = [];

    this.allRecipes.forEach((recipe) => {
      if (this.favorites.includes(recipe.title)) {
        recipes.push(recipe);
      }
    })
    return recipes;
  }

  getRecipesArr() {
    return this.allRecipes;
  }

  getRecipeWithTitle(title: string) {
    return this.allRecipes.find((recipe: any) => recipe.title === title);
  }

  addNewRecipe(title: string, descr: string, url: string, instr: string) {
    if (this.allRecipes.findIndex((recipe: any) => recipe.title === title) > -1) {
      this.isRecipeExist = true;
    } else {
      this.allRecipes.push({
        title: title,
        description: descr,
        photoUrl: url,
        ingredients: [],
        instructions: instr,
        categoryId: 'string',
        likes: 0
      });
      this.isRecipeExist = false;
    }
  }

  editRecipe(curRecipeObj: any, title: string, descr: string, url: string, instr: string) {
    curRecipeObj.title = title;
    curRecipeObj.description = descr;
    curRecipeObj.photoUrl = url;
    curRecipeObj.instructions = instr;
  }

  removeRecipe(title: string): void {
    debugger
    this.allRecipes.forEach((recipe: any, index: number) => {
      if (recipe.title === title) {
        this.allRecipes.splice(index, 1);
        return;
      }
    })
  }
}

// interface Recipe {
//   title: string,
//   description: string,
//   photoUrl: string,
//   ingredients: string[],
//   instructions: string,
//   categoryId: string,
//   likes: number
// }