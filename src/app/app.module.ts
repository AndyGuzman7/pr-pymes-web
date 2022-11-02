import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { LoadScriptsService } from './load-scripts.service';
<<<<<<< HEAD
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Angular Material
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { SupplierComponent } from './components/supplier/supplier.component';
import { MatTableModule } from '@angular/material/table';
=======
import { RegisterComponent } from './views/register/register.component';
import { PasswordRecoveryComponent } from './views/recovery_password/password-recovery/password-recovery.component';
import { UpdatePasswordComponent } from './views/recovery_password/update-password/update-password.component';
>>>>>>> 10689563eab5f32fb2c760e8c390c381ccb9f50e

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
<<<<<<< HEAD
    LoginComponent,
    SupplierComponent
=======
    RegisterComponent,
    PasswordRecoveryComponent,
    UpdatePasswordComponent
>>>>>>> 10689563eab5f32fb2c760e8c390c381ccb9f50e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule
    
=======
    FormsModule,
    ReactiveFormsModule
>>>>>>> 10689563eab5f32fb2c760e8c390c381ccb9f50e
  ],
  providers: [
    LoadScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
