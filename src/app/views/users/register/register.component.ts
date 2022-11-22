import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators }from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario: Usuario = new Usuario();

  signup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required ]),
    name: new FormControl('', [Validators.required ]),
    last_name: new FormControl('', [Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.min(3) ]),
    confirmPassword: new FormControl('', [Validators.required, Validators.min(3) ])
  });
  hide = true;
  get emailInput() { return this.signup.get('Correo'); }
  get passwordInput() { return this.signup.get('contrasenia'); }  
  get confirmPasswordInput() { return this.signup.get('conf-contrasenia'); }
  get nameInput() { return this.signup.get('Nombre'); }
  get last_nameInput() { return this.signup.get('Apellido'); }

  constructor(private service: UsuarioService, private router: Router) {     
  }

  crear(): void {
    this.usuario.rol_id = 1; 

    this.service.createUser(this.usuario).subscribe(usuario => {
        console.log(usuario);
        this.router.navigate(['user_login']);
      });
  }

  ngOnInit() {
    
  }

}
