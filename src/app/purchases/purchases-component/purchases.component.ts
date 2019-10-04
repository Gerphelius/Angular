import { Component } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { IngredientsService } from 'src/app/core/ingredients/ingredients.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})
export class PurchasesComponent {
  faShoppingCart = faShoppingCart;

  addIngredient = this.ingredientsService.addToPurchases;
  purchases: Array<string> = this.ingredientsService.purchases;

  constructor(private readonly ingredientsService: IngredientsService) { }
}
