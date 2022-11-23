import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import {LoadScriptsService} from 'src/app/load-scripts.service'
import {Router, TitleStrategy} from '@angular/router';
import {Usuario} from 'src/app/models/usuario'
import { UsuarioService } from 'src/app/services/usuario.service';
import { EmpresaService } from 'src/app/services/empresa.service';
import { RolService } from 'src/app/services/rol.service';
import { Rol } from 'src/app/models/rol';
import { Empresa } from 'src/app/models/empresa';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  error_messages = {
    'password': [
      { type: 'required', message: 'La contraseña es necesaria.'}
    ],
    'email': [
      { type: 'required', message: 'El correo es necesario.'},
      { type: 'email', message: 'El formato del correo no es válido.'}
    ]
  }

  constructor(public formBuilder: FormBuilder, private service: UsuarioService, private empresaService: EmpresaService, private rolService: RolService, private _LoadScripts:LoadScriptsService, private router:Router ) { 
    _LoadScripts.Load(["accordion"]);

    this.loginForm = this.formBuilder.group({
      password: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
    });

  }

  user:Usuario;
  rol:Rol;
  business:Empresa;

  Login() {
    if (!this.loginForm.valid) {
      return;
    }

    const email = (document.getElementById('email') as HTMLInputElement).value;
    const pass = (document.getElementById('password') as HTMLInputElement).value;
   
      this.service.loginUser(email, pass).subscribe(data => {
        this.user = data;
        console.log(this.user);

        if (!this.loginForm.valid) {
          return;
        }

        if (this.user != null) {          
          this.rolService.selectRol(this.user.rol_id).subscribe(rol => {
            this.rol = rol;

            if (this.rol.id != 1) {
              this.empresaService.selectBusiness(this.rol.business_id).subscribe(business => {
                this.business = business;
            
                console.log(this.user);
                console.log(this.rol);
                console.log(this.business);
              })
            }
            
          })        

          this.router.navigate(['HacerVenta']);

        } else {
          alert('Nombre y/o contraseña incorrectos');
        }    
      })    

  }

  ngOnInit(): void {
  }

}

