import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentasComponent } from './components/ventas/ventas.component';
import { ModuloVentasComponent } from './components/modulo-ventas/modulo-ventas.component';
import { RegisterBusinessComponent } from './views/users/register-business/register-business.component';
import { RegisterComponent } from './views/users/register/register.component';
import { RegisterEmployeeComponent } from './views/users/register-employee/register-employee.component';
import { SelectRegisterComponent } from './views/users/select-register/select-register.component';
import { LoginComponent } from './views/users/login/login.component';
import { PasswordRecoveryComponent } from './views/recovery_password/password-recovery/password-recovery.component';
import { UpdatePasswordComponent } from './views/recovery_password/update-password/update-password.component';

const routes: Routes = [
  {path: 'ventas', component: ModuloVentasComponent},
  {path: 'HacerVenta', component: VentasComponent},
  {path: 'register_business', component: RegisterBusinessComponent},
  {path: 'register_user', component: RegisterComponent},
  {path: 'register_employee', component: RegisterEmployeeComponent},
  {path: 'select_register', component: SelectRegisterComponent},
  {path: 'user_login', component: LoginComponent},
  {path: 'password_recovery', component: PasswordRecoveryComponent},
  {path: 'update_password/:email', component: UpdatePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
