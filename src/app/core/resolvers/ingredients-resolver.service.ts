import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IngredientsService } from '../ingredients/ingredients.service';

@Injectable({providedIn: 'root'})
export class IngredientsResolverService implements Resolve<any> {
  constructor(
    private ingredientsService: IngredientsService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<any> | Promise<any> | any {
    return this.ingredientsService.getIngredientsArr();
  }
}
