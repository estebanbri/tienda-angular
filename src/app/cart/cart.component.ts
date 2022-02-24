import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CartDataService } from '../services/cart-data.service';
import { CatalogDataService } from '../services/catalog-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private catalogDataService: CatalogDataService, public cartDataService: CartDataService) { }

  totalPrice$ = this.cartDataService.totalPrice$;
  
  ngOnInit(): void {
  }

  deleteItem(itemIndex: number): void {
    this.cartDataService.deleteItem(itemIndex);
  }

}
