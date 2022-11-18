import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentasComponent } from './components/ventas/ventas.component';
import { ModuloVentasComponent } from './components/modulo-ventas/modulo-ventas.component';
import { RegisterBusinessComponent } from './views/users/register-business/register-business.component';
import { RegisterComponent } from './views/users/register/register.component';
import { SelectRegisterComponent } from './views/users/select-register/select-register.component';
import { HomeComponent } from './views/portal/home/home.component';

import { CartComponent } from './views/portal/cart/cart.component';
import { ProductsComponent } from './views/portal/products/products.component';
import { LoginportalComponent } from './views/portal/loginportal/loginportal.component';
import { SignupComponent } from './views/portal/signup/signup.component';
import { CheckoutComponent } from './views/portal/checkout/checkout.component';
import { DetailproductComponent } from './views/portal/detailproduct/detailproduct.component';

const routes: Routes = [
  {path: 'ventas', component: ModuloVentasComponent},
  {path: 'HacerVenta', component: VentasComponent},
  {path: 'register_business', component: RegisterBusinessComponent},
  {path: 'register_user', component: RegisterComponent},
  {path: 'select_register', component: SelectRegisterComponent},
  {path: 'home', component: HomeComponent},

  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'loginportal', component: LoginportalComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'detailproduct', component: DetailproductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
