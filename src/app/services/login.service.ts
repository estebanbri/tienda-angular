import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _loggedIn = new BehaviorSubject<boolean>(false);
  public loggedIn$ = this._loggedIn.asObservable();

  constructor() { }

  public logIn() {
    this._loggedIn.next(true);
  }

  public logOut() {
    this._loggedIn.next(false);
  }

}
