import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from 'src/app/shared/interfaces/recipe-interface';

@Injectable({providedIn: 'root'})
export class TitleResolverService implements Resolve<Recipe> {
  constructor(
    private recipesService: RecipesService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Recipe> | Promise<Recipe> | Recipe {
    return this.recipesService.getRecipeWithTitle(route.params['title']);
  }
}
