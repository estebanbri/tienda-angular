import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../model/model';
import { CartDataService } from '../services/cart-data.service';
import { CatalogDataService } from '../services/catalog-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private catalogDataService: CatalogDataService, public cartDataService: CartDataService) { }

  ngOnInit(): void {
  }

  get getTotalPrice(): Observable<number>{
    return this.cartDataService.getTotalPrice();
  }

  deleteItem(itemIndex: number): void {
    this.cartDataService.deleteItem(itemIndex);
  }

}
