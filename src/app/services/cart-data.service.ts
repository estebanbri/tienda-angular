import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CartItem } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {
  counter = 0;
  private _cartItems = new BehaviorSubject<CartItem[]>([]);
  public cartItems$ = this._cartItems.asObservable();

  totalQuantity$ = this._cartItems.pipe(map( items => items.length));
  totalPrice$ = this._cartItems.pipe(map( items => items.reduce((acc, { price }) => (acc += price), 0)));

  constructor() {}

  addItem(itemCart: CartItem): void {
    this._cartItems.next([...this._cartItems.value, itemCart]);
  }

  deleteItem(itemIndex: number): void {
    this._cartItems.value.splice(itemIndex, 1);
    this._cartItems.next([...this._cartItems.value]);
  }
 
  getCartItemById (id: number): Observable<CartItem | null> {
    return this._cartItems.pipe(map(items => items.find(item => item.id === id) || null));
  }

  getQuantityById(id: number): Observable<number> {
    return this._cartItems.pipe(map( items => items.filter(item => item.id == id).length));
  }


}
