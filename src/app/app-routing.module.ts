import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginGuard } from './guards/login.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: 'home'},
  { path: 'home', component: HomeComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent, canActivate: [LoginGuard] },
  { path: '**', component: LoginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
