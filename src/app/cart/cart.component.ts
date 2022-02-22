import { Component, OnInit } from '@angular/core';
import { CartItem } from '../model/model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [
    {id: 1, name: 'headset', imageUrl:'headset.jpg', price: 50},
    {id: 2, name: 'keyboard', imageUrl:'keyboard.jpg', price: 40},
    {id: 3, name: 'mouse', imageUrl:'mouse.jpg', price: 30}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  get total(): number {
    return this.cartItems.reduce((acc, { price }) => (acc += price), 0);
  }

  deleteItem(itemToDelete: CartItem): void {
    this.cartItems = this.cartItems.filter((item) => item !== itemToDelete);
  }

}
