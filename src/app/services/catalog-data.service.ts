import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable, of } from 'rxjs';
import { urlGlobal, environment } from 'src/environments/environment';
import { CatalogItem } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class CatalogDataService {

  constructor(private http: HttpClient) { }

  getAllCatalog(): Observable<CatalogItem[]> {
    return this.http.get<CatalogItem[]>(environment.apiUrl + urlGlobal.GetAllCatalog).pipe(
    catchError(e => {
      console.error(e);
      return of<Array<CatalogItem>>([]);
    }));
  }
}
