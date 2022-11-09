import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterBusinessComponent } from './views/users/register-business/register-business.component';
import { RegisterComponent } from './views/users/register/register.component';
import { SelectRegisterComponent } from './views/users/select-register/select-register.component';

const routes: Routes = [
  {path: 'register_business', component: RegisterBusinessComponent},
  {path: 'register_user', component: RegisterComponent},
  {path: 'select_register', component: SelectRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
