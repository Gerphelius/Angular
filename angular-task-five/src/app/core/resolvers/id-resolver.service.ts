import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipesService } from '../recipes/recipes.service';

@Injectable({providedIn: 'root'})
export class IdResolverService implements Resolve<{}> {
  constructor(
    private recipesService: RecipesService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<{}> | Promise<{}> | {} {
    return this.recipesService.getRecipeById(route.params.id);
  }
}