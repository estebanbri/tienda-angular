import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../model/model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem!: CartItem;

  @Output() cartItemDelete = new EventEmitter<void>();
  
  constructor() {}

  ngOnInit(): void {}

  onDeleteClicked(): void {
    this.cartItemDelete.emit();
  }

}
