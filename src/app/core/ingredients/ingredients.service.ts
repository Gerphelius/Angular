import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  purchases: Array<string> = [];

  addToPurchases(ingredient: string) {
    this.purchases.push(ingredient);
  }

  removeFromPurchases(ingredient: string) {
    this.purchases.splice(this.purchases.indexOf(ingredient), 1);
  }
}