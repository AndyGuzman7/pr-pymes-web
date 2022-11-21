import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentasComponent } from './components/ventas/ventas.component';
import { ModuloVentasComponent } from './components/modulo-ventas/modulo-ventas.component';
import { RegisterBusinessComponent } from './views/users/register-business/register-business.component';
import { RegisterComponent } from './views/users/register/register.component';
import { SelectRegisterComponent } from './views/users/select-register/select-register.component';
import { NewAccountJournalComponent } from './views/journal/new-account-journal/new-account-journal.component';
import { ReportsJournalComponent } from './views/journal/reports-journal/reports-journal.component';
import { JournalPrincipalComponent } from './views/journal/journal-principal/journal-principal.component';
import { SeeSalesJournalComponent } from './views/journal/see-sales-journal/see-sales-journal.component';

const routes: Routes = [
  {path: 'ventas', component: ModuloVentasComponent},
  {path: 'HacerVenta', component: VentasComponent},
  {path: 'register_business', component: RegisterBusinessComponent},
  {path: 'register_user', component: RegisterComponent},
  {path: 'select_register', component: SelectRegisterComponent},
  {path: 'gestion_cuenta', component: NewAccountJournalComponent},
  {path: 'reporte_libroDiario', component: ReportsJournalComponent},
  {path: 'libro_diario', component: JournalPrincipalComponent},
  {path: 'reporte_transacciones/:id', component: SeeSalesJournalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
