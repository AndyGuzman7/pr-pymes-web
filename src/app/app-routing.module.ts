import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetListComponent } from './views/shopping/budget-list/budget-list.component';
import { BudgetSheetComponent } from './views/shopping/budget-sheet/budget-sheet.component';
import { ManufacturingListComponent } from './views/shopping/manufacturing-list/manufacturing-list.component';
import { ManufacturingProductionRegistrationComponent } from './views/shopping/manufacturing-production-registration/manufacturing-production-registration.component';
import { ProductionInformationDetailComponent } from './views/shopping/production-information-detail/production-information-detail.component';
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
  {path: 'supplier/:id', component: SupplierRegistrationComponent},

  //Production
  {path: 'manufacturing', component: ManufacturingListComponent},
  {path: 'manufacturing/:id', component: ProductionInformationDetailComponent},
  {path: 'manufacture', component: ManufacturingProductionRegistrationComponent},
  {path: 'manufacture/:id', component: ManufacturingProductionRegistrationComponent},

  //Presupuestos
  {path: 'budgets', component: BudgetListComponent},
  //{path: 'budgets/:id', component: null}, /*View presupuesto */
  /** 
   * Vista con proveedor seleccionado (Edit/Create)
   **/
  {path: 'budget/:idSupplier', component: BudgetSheetComponent},
  /**
   * Vista para selecionar o buscar proveedor (Edit/Create)
   * Crear un modal o similar.
   */
  {path: 'budget', component: BudgetSheetComponent}, 

  //Pedido de compra
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
