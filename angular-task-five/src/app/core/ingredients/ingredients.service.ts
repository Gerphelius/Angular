import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  constructor(private http: HttpClient) {}

  purchasesSubject = new Subject();

  getIngredientsArr(): Observable<{}> {
    return this.http.get('http://localhost:3000/api/purchases');
  }

  addToPurchases(ingredients: string[] | string) {
    if (Array.isArray(ingredients)) {
      ingredients.forEach((ingredient) => {
        this.http.post('http://localhost:3000/api/purchases', {purchases: ingredient}).subscribe(() => this.purchasesSubject.next());
      })
    } else {
      this.http.post('http://localhost:3000/api/purchases', {purchases: ingredients}).subscribe(() => this.purchasesSubject.next());
    }
  }

  removeFromPurchases(id: string) {
    this.http.delete(`http://localhost:3000/api/purchases/${id}`).subscribe(() => this.purchasesSubject.next());
  }
}