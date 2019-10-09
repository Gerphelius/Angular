import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipesService } from '../recipes/recipes.service';

@Injectable({providedIn: 'root'})
export class RecipesResolverService implements Resolve<any> {
  constructor(
    private recipesService: RecipesService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<any> | Promise<any> | any {
    return this.recipesService.getRecipesArr();
  }
}
