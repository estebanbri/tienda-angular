import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CartItem, CatalogItem } from '../model/model';
import { CartDataService } from '../services/cart-data.service';
import { CatalogDataService } from '../services/catalog-data.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogComponent implements OnInit {
  catalog$ = this.catalogDataService.getAllCatalog();
  
  constructor(private catalogDataService: CatalogDataService,
              public cartDataService: CartDataService) { }

  ngOnInit(): void {
  }

  onAddCatalogItem(catalogItem: CatalogItem) {
    const cartItem = this.mapCatalogItemToCartItem(catalogItem);
    this.cartDataService.addItem(cartItem);
  }

  mapCatalogItemToCartItem(catalogItem: CatalogItem): CartItem {
    const { id, name, price, imageUrl } = catalogItem;
    return { id, name, price, imageUrl, quantity: 1 };
  }
   
}
