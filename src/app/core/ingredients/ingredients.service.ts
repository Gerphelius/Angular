import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  purchases: Array<string> = [];

  getIngredientsArr() {
    return this.purchases;
  }

  addToPurchases(ingredient: string) {
    this.purchases.push(ingredient);
  }

  removeFromPurchases(ingredient: string) {
    this.purchases.splice(this.purchases.indexOf(ingredient), 1);
  }
}