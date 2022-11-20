import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators }from '@angular/forms';
import {LoadScriptsService} from 'src/app/load-scripts.service'
import {Router} from '@angular/router';
import {Usuario} from 'src/app/models/usuario'
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.min(3) ])
  });s
  hide = true;
  get emailInput() { return this.signin.get('email'); }
  get passwordInput() { return this.signin.get('password'); }  

  constructor(private service: UsuarioService, private _LoadScripts:LoadScriptsService, private router:Router ) { 
    _LoadScripts.Load(["accordion"]);
  }

  user:Usuario;

  ngOnInit(): void {
  }


  Login() {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const pass = (document.getElementById('password') as HTMLInputElement).value;
   
    if (email.trim() != '' && pass.trim() != '') {
      this.service.selectUserID(1)
      .subscribe(data=>{
        this.user = data;
        if(this.user.id == 1) {          
          this.router.navigate(['HacerVenta'])
        }
        else {
          alert('Nombre y/o contraseña incorrectos');
        }
      })
    }
  }
}

