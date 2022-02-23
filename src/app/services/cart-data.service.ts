import { Injectable } from '@angular/core';
import { BehaviorSubject, mergeMap, map, Observable, of, tap } from 'rxjs';
import { CartItem } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {
  

  private _cartItems = new BehaviorSubject<CartItem[]>([]);
  public cartItems$ = this._cartItems.asObservable();

  constructor() {

  }

  addItem(itemCart: CartItem): void {
    this._cartItems.next([...this._cartItems.value, itemCart]);
  }

  deleteItem(itemIndex: number): void {
    console.log(itemIndex);
    this._cartItems.value.splice(itemIndex, 1);
    this._cartItems.next([...this._cartItems.value]);
  }

  getTotalQuantity(): Observable<number> {
    return this._cartItems.pipe(map( items => items.length));
  }

  getTotalPrice(): Observable<number> {
    return this._cartItems.pipe(map( items => items.reduce((acc, { price }) => (acc += price), 0)));
  }

  getCartItemById (id: number): Observable<CartItem | null> {
    return this._cartItems.pipe(map(items => items.find(item => item.id === id) || null));
  }

  getQuantityById(id: number): Observable<number> {
    return this._cartItems.pipe(map( items => items.filter(item => item.id == id).length));
  }

 

}
