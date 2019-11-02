import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/shared/interfaces/recipe-interface';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { Categories } from 'src/app/shared/interfaces/categories';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  constructor(private http: HttpClient) { }

  categories: Categories[];
  recipesSubject = new Subject();
  categoriesSubject = new Subject();
  
  getRecipes() {
    if (!this.categories) {
      this.categoriesSubject.next(this.getCategories());
    }
    return this.http.get('http://localhost:3000/api/recipes');
  }
  
  getCategories() {
    this.http.get('http://localhost:3000/api/categories').subscribe({
      next: (categories: Categories[]) => { this.categories = categories }
    });
  }

  addNewRecipe(newRecipe: Recipe) {
    newRecipe.categoryId = this.categories.find((category: Categories) => category.name === newRecipe.categoryId ).id; 
    this.http.post('http://localhost:3000/api/recipes', newRecipe).subscribe(() => this.recipesSubject.next());
  }
  
  getRecipeById(id: string): Observable<{}> {
    return this.http.get(`http://localhost:3000/api/recipes/${id}`);
  }

  editRecipe(editedRecipe: Recipe, id: string) {
    editedRecipe.id = id;
    editedRecipe.categoryId = this.categories.find((category: Categories) => category.name === editedRecipe.categoryId ).id; 
    this.http.put('http://localhost:3000/api/recipes', editedRecipe).subscribe(() => this.recipesSubject.next());
  }

  removeRecipe(recipeId: string): void {
    this.http.delete(`http://localhost:3000/api/recipes/${recipeId}`).subscribe(() => this.recipesSubject.next());
  }

  getFavRecipes() {
    return this.http.get(`http://localhost:3000/api/favorites`);
  }

  addToFav(id: string) {
    this.http.post(`http://localhost:3000/api/favorites`, {id: id}).subscribe();
  }

  removeFromFav(id: string) {
    this.http.delete(`http://localhost:3000/api/favorites/${id}`).subscribe(() => this.recipesSubject.next());
  }

  addLike(recipe: Recipe) {
    this.http.post('http://localhost:3000/api/recipes/likes', recipe).subscribe(() => this.recipesSubject.next());
  }

  addDislike(recipe: Recipe) {
    this.http.post('http://localhost:3000/api/recipes/dislikes', recipe).subscribe(() => this.recipesSubject.next());
  }
}