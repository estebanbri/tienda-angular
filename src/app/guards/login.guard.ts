import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor(private loginService: LoginService, private router: Router) {}


  canActivate(): boolean | Observable<boolean>  {
    return this.loginService.loggedIn$.pipe(
      map(isLoggedIn => {
        return isLoggedIn;
      }),
      catchError((err) => {
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }   
  
}
