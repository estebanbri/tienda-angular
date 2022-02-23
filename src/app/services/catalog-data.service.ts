import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CatalogItem } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class CatalogDataService {

  private _catalog = new BehaviorSubject<CatalogItem[]>(this.getAllCatalog());

  public catalog$ = this._catalog.asObservable();

  constructor() { }

  getAllCatalog(): CatalogItem[] {
    // Refactor call to BE
    return [
      {id: 1, name: "Headphone", price: 30, vendor: "Sony", imageUrl:"headphone.jpg"},
      {id: 2, name: "Monitor", price: 50, vendor: "Samsung", imageUrl:"monitor.jpg"},
      {id: 3, name: "Keyboard", price: 10, vendor: "Logitech", imageUrl:"keyboard.jpg"},
    ];
  }
}
