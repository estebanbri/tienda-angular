import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CatalogItem } from '../model/model';
import { CartDataService } from '../services/cart-data.service';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.css']
})
export class CatalogItemComponent implements OnInit {

  @Input() catalogItem!: CatalogItem;
  @Output() catalogItemAdd = new EventEmitter<void>();

  constructor(private cartDataService: CartDataService) { }

  ngOnInit(): void {
  }

  onAddClicked(catalogItem: CatalogItem) {
    this.catalogItemAdd.emit();
  }

  itemCartQuantity(id: number) {
    return this.cartDataService.getQuantityById(id);
  }

}
