import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentasComponent } from './components/ventas/ventas.component';
import { ModuloVentasComponent } from './components/modulo-ventas/modulo-ventas.component';
import { RegisterBusinessComponent } from './views/users/register-business/register-business.component';
import { RegisterComponent } from './views/users/register/register.component';
import { SelectRegisterComponent } from './views/users/select-register/select-register.component';
import { GetComponent } from './components/Factura/get/get.component';
import { DetalleFacturaComponent } from './components/DetalleFactura/DetalleFactura.component';

const routes: Routes = [
  {path: 'ventas', component: ModuloVentasComponent},
  {path: 'HacerVenta', component: VentasComponent},
  {path: 'register_business', component: RegisterBusinessComponent},
  {path: 'register_user', component: RegisterComponent},
  {path: 'select_register', component: SelectRegisterComponent},
  {path: 'get', component:GetComponent},
  {path: 'detallefactura', component:DetalleFacturaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
