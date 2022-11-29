import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetListComponent } from './views/shopping/budget-list/budget-list.component';
import { BudgetSheetViewComponent } from './views/shopping/budget-sheet-view/budget-sheet-view.component';
import { BudgetSheetComponent } from './views/shopping/budget-sheet/budget-sheet.component';
import { ManufacturingListComponent } from './views/shopping/manufacturing-list/manufacturing-list.component';
import { ManufacturingProductionRegistrationComponent } from './views/shopping/manufacturing-production-registration/manufacturing-production-registration.component';
import { OrderToSupplierComponent } from './views/shopping/order-to-supplier/order-to-supplier.component';
import { OrdersToSupplierComponent } from './views/shopping/orders-to-supplier/orders-to-supplier.component';
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
  {path: 'budgets', component: BudgetListComponent},//Listado
  {path: 'budget', component: BudgetSheetComponent},//Crear presupuesto
  {path: 'budget/:idSupplier', component: BudgetSheetComponent},//Crear presupuesto teniendo proveedor
  {path: 'budgetView/:idBudget', component: BudgetSheetViewComponent},//Ver presupuesto
  {path: 'budget/:idSupplier/:idBudget', component: BudgetSheetComponent},//Editar presupuesto

  //Pedido de compra
  {path: 'pedidos', component: OrdersToSupplierComponent},
  {path: 'pedido/:idBudget', component: OrderToSupplierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
