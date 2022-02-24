import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlGlobal, environment } from 'src/environments/environment';
import { CatalogItem } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class CatalogDataService {

  constructor(private http: HttpClient) { }

  getAllCatalog(): Observable<CatalogItem[]> {
    return this.http.get<CatalogItem[]>(environment.apiUrl + urlGlobal.GetAllCatalog);
  }
}
