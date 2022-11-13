import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierManagementComponent } from './views/shopping/supplier-management/supplier-management.component';
import { SupplierRegistrationComponent } from './views/shopping/supplier-registration/supplier-registration.component';
import { SupplierComponent } from './views/shopping/supplier/supplier.component';
import { RegisterBusinessComponent } from './views/users/register-business/register-business.component';
import { RegisterComponent } from './views/users/register/register.component';
import { SelectRegisterComponent } from './views/users/select-register/select-register.component';

const routes: Routes = [
  {path: 'register_business', component: RegisterBusinessComponent},
  {path: 'register_user', component: RegisterComponent},
  {path: 'select_register', component: SelectRegisterComponent},

  //Proveedor
  {path: 'suppliers', component: SupplierComponent},
  {path: 'suppliers/:id', component: SupplierManagementComponent},
  {path: 'supplier', component: SupplierRegistrationComponent},
  {path: 'supplier/:id', component: SupplierRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
