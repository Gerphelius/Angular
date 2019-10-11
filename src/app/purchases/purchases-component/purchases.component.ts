import { Component } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { IngredientsService } from 'src/app/core/ingredients/ingredients.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})
export class PurchasesComponent {
  constructor(private readonly ingredientsService: IngredientsService, private route: ActivatedRoute) {}
  
  faShoppingCart = faShoppingCart;
  
  addIngredient = this.ingredientsService.addToPurchases; 
  purchases: Array<string> = this.route.snapshot.data.ingredientsArr;
}