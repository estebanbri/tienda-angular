import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartDataService } from '../services/cart-data.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  totalQuantity$ = this.cartDataService.totalQuantity$;
  
  constructor(
    public loginService: LoginService,
    private router: Router,
    private cartDataService: CartDataService) { }

  ngOnInit() {
  }

  logOut() {
    this.loginService.logOut();
    this.router.navigate(['login']);
  }

}
