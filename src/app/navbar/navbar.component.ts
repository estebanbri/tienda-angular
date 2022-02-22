import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.loginService.logOut();
    this.router.navigate(['login']);
  }
}
