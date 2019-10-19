import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IngredientsService } from '../ingredients/ingredients.service';

@Injectable({providedIn: 'root'})
export class IngredientsResolverService implements Resolve<{}> {
  constructor(
    private ingredientsService: IngredientsService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<{}> | Promise<{}> | {} {
    return this.ingredientsService.getIngredientsArr();
  }
}
