import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IngredientsService } from '../ingredients/ingredients.service';
import { Recipe } from 'src/app/shared/interfaces/recipe-interface';

@Injectable({providedIn: 'root'})
export class IngredientsResolverService implements Resolve<Array<string>> {
  constructor(
    private ingredientsService: IngredientsService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Array<string>> | Promise<Array<string>> | Array<string> {
    return this.ingredientsService.getIngredientsArr();
  }
}
