import { Component, OnInit } from '@angular/core';
import { IngredientsService } from 'src/app/core/ingredients/ingredients.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Recipe } from 'src/app/shared/interfaces/recipe-interface';

@Component({
  selector: 'app-purchases-list',
  templateUrl: './purchases-list.component.html',
  styleUrls: ['./purchases-list.component.scss']
})
export class PurchasesListComponent implements OnInit {
  constructor(private readonly ingredientsService: IngredientsService) { }

  faTimes = faTimes;
  purchases: Recipe[] = [];

  removeFromPurchases(purchaseName: string) {
    const purchaseId: string = this.purchases.find((item) => item.purchase === purchaseName).id;
    this.ingredientsService.removeFromPurchases(purchaseId);
  }

  ngOnInit() {
    this.ingredientsService.purchasesSubject.subscribe(() => {
      this.ingredientsService.getIngredientsArr().subscribe((purchases: Recipe[]) => this.purchases = purchases)
    })
  }
}