import { Component } from '@angular/core';
import { IngredientsService } from 'src/app/core/ingredients/ingredients.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-purchases-list',
  templateUrl: './purchases-list.component.html',
  styleUrls: ['./purchases-list.component.scss']
})
export class PurchasesListComponent {
  faTimes = faTimes;
  purchases: Array<string> = this.ingredientsService.purchases;
  removeFromPurchases = this.ingredientsService.removeFromPurchases;

  constructor(private readonly ingredientsService: IngredientsService) { }
}
