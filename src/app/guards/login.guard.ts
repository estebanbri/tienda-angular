import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor(private loginService: LoginService, private router: Router) {}


  canActivate(): Observable<boolean | UrlTree>   {
    return this.isUserLoggedIn();
  }
  
  private isUserLoggedIn(): Observable<boolean | UrlTree>  {
    return this.loginService.loggedIn$.pipe(
      map(isLoggedIn => isLoggedIn || this.router.parseUrl('/login'))
    );
  }
  
}
