import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { LoadScriptsService } from './load-scripts.service';
import { LoginComponent } from './views/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Angular Material
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { SupplierComponent } from './views/supplier/supplier.component';
import { MatTableModule } from '@angular/material/table';
import { RegisterComponent } from './views/register/register.component';
import { PasswordRecoveryComponent } from './views/recovery_password/password-recovery/password-recovery.component';
import { UpdatePasswordComponent } from './views/recovery_password/update-password/update-password.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AllWarehousesComponent } from './views/warehouses/all-warehouses/all-warehouses.component';
@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    LoginComponent,
    SupplierComponent,
    RegisterComponent,
    PasswordRecoveryComponent,
    UpdatePasswordComponent,
    AllWarehousesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    FormsModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  providers: [
    LoadScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
