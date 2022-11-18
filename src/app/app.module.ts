import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { LoadScriptsService } from './load-scripts.service';
import { LoginComponent } from './views/users/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Angular Material
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { SupplierComponent } from './views/shopping/supplier/supplier.component';
import { MatTableModule } from '@angular/material/table';
import { RegisterComponent } from './views/users/register/register.component';
import { PasswordRecoveryComponent } from './views/recovery_password/password-recovery/password-recovery.component';
import { UpdatePasswordComponent } from './views/recovery_password/update-password/update-password.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AllWarehousesComponent } from './views/warehouses/all-warehouses/all-warehouses.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import { OrdersToSupplierComponent } from './views/shopping/orders-to-supplier/orders-to-supplier.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { SeePurchasesComponent } from './views/shopping/see-purchases/see-purchases.component';
import { SeeSalesJournalComponent } from './views/journal/see-sales-journal/see-sales-journal.component';
import { ReportsJournalComponent } from './views/journal/reports-journal/reports-journal.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NewAccountJournalComponent } from './views/journal/new-account-journal/new-account-journal.component';
import { RegisterBusinessComponent } from './views/users/register-business/register-business.component';
import { SelectRegisterComponent } from './views/users/select-register/select-register.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { ListProductsComponent } from './views/warehouses/list-products/list-products.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { ModuloVentasComponent } from './components/modulo-ventas/modulo-ventas.component';
import { JQueryStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import {HttpClientModule} from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete'
//import {jquery} from './jquery';

import { RegisterProductComponent } from './views/warehouses/register-product/register-product.component';
import { HomeComponent } from './views/portal/home/home.component';
import { JournalPrincipalComponent } from './views/journal/journal-principal/journal-principal.component';
import { ManufacturingListComponent } from './views/shopping/manufacturing-list/manufacturing-list.component';
import { BudgetListComponent } from './views/shopping/budget-list/budget-list.component';
import { SupplierRegistrationComponent } from './views/shopping/supplier-registration/supplier-registration.component';
import { ManufacturingProductionRegistrationComponent } from './views/shopping/manufacturing-production-registration/manufacturing-production-registration.component';
import { ProductionInformationDetailComponent } from './views/shopping/production-information-detail/production-information-detail.component';
import { SupplierManagementComponent } from './views/shopping/supplier-management/supplier-management.component';
import { OrderToSupplierComponent } from './views/shopping/order-to-supplier/order-to-supplier.component';
import { BudgetSheetComponent } from './views/shopping/budget-sheet/budget-sheet.component';
import { SideMenuShoppingComponent } from './components/side-menu-shopping/side-menu-shopping.component';
import { NewSupplierOrderComponent } from './views/shopping/new-supplier-order/new-supplier-order.component';

//Portal
import { HeaderComponent } from './views/portal/header/header.component';
import { CartComponent } from './views/portal/cart/cart.component';
import { ProductsComponent } from './views/portal/products/products.component';
import { FiltersPipe } from './views/portal/filter/filters.pipe';
import { LoginportalComponent } from './views/portal/loginportal/loginportal.component';
import { SignupComponent } from './views/portal/signup/signup.component';
import { CheckoutComponent } from './views/portal/checkout/checkout.component';
import { DetailproductComponent } from './views/portal/detailproduct/detailproduct.component';



@NgModule({
  declarations: [
    AppComponent,
    VentasComponent,
    ModuloVentasComponent,
    TopNavBarComponent,
    LoginComponent,
    SupplierComponent,
    RegisterComponent,
    PasswordRecoveryComponent,
    UpdatePasswordComponent,
    AllWarehousesComponent,
    OrdersToSupplierComponent,
    SeePurchasesComponent,
    SeeSalesJournalComponent,
    ReportsJournalComponent,
    NewAccountJournalComponent,
    RegisterBusinessComponent,
    SelectRegisterComponent,
    ListProductsComponent,

    VentasComponent,

    RegisterProductComponent,
    HomeComponent,
    JournalPrincipalComponent,
    ManufacturingListComponent,
    BudgetListComponent,
    SupplierRegistrationComponent,
    ManufacturingProductionRegistrationComponent,
    ProductionInformationDetailComponent,
    SupplierManagementComponent,
    OrderToSupplierComponent,
    BudgetSheetComponent,
    NewSupplierOrderComponent,
    BudgetSheetComponent,
    SideMenuShoppingComponent,

    HeaderComponent,
    CartComponent,
    ProductsComponent,
    FiltersPipe,
    LoginComponent,
    SignupComponent,
    CheckoutComponent,
    DetailproductComponent,
    LoginportalComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    FormsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,

    NgSelectModule,
    HttpClientModule,
    MatAutocompleteModule,

    MatTooltipModule,
    MatGridListModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDatepickerModule,
    NgSelectModule,
    MatDialogModule
  ],
  providers: [
    LoadScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
