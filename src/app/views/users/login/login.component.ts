import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators }from '@angular/forms';
import {LoadScriptsService} from 'src/app/load-scripts.service'
import {Router} from '@angular/router';
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
  signin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.min(3) ])
  },  
  );
  hide = true;
  get emailInput() { return this.signin.get('email'); }
  get passwordInput() { return this.signin.get('password'); }  

  constructor(private service: UsuarioService, private empresaService: EmpresaService, private rolService: RolService, private _LoadScripts:LoadScriptsService, private router:Router ) { 
    _LoadScripts.Load(["accordion"]);
  }

  user:Usuario;
  rol:Rol;
  business:Empresa;

  ngOnInit(): void {
  }


  Login() {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const pass = (document.getElementById('password') as HTMLInputElement).value;
   
    if (email.trim() != '' && pass.trim() != '') {
      this.service.loginUser(email, pass).subscribe(data => {
        this.user = data;

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

  }
}

