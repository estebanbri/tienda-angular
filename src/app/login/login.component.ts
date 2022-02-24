import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
  }

  logIn() {
    this.loginService.logIn();
    this.router.navigate(["/home"]);
  }

}
