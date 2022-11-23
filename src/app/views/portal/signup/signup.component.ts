import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms"
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;
  public usuario: Usuario;
  public existe : Boolean = false;
  public usuarios : Usuario[] = [];
  constructor(private formBuilder : FormBuilder, private usuarioService : UsuarioService, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      first_name:[''],
      last_name:[''],
      email:[''],
      password:[''],
      passwordConfirm:['']
    })
  }

  userBoolExist(exis:Boolean){
    this.existe = exis;
  }

  signUpGo(){
    let band = true;

    if(this.signupForm.controls['first_name'].value==''||this.signupForm.controls['last_name'].value==''||this.signupForm.controls['email'].value==''||this.signupForm.controls['password'].value==''||this.signupForm.controls['passwordConfirm'].value==''){
      alert("Ingrese datos");
      band=false;
    }else if(this.signupForm.controls['password'].value!=this.signupForm.controls['passwordConfirm'].value){
      alert("Las contraseñas no coinciden");
      band=false;
    }else if(this.existe){
      alert("Email ingresado ya registrado");
    }
    
    if(band&&!this.existe){
      this.usuario=new Usuario();
      this.usuario.name = this.signupForm.controls['first_name'].value;
      this.usuario.last_name = this.signupForm.controls['last_name'].value;
      this.usuario.email = this.signupForm.controls['email'].value;
      this.usuario.password = this.signupForm.controls['password'].value;
      this.usuario.rol_id = 1;

      this.usuarioService.createUser(this.usuario).subscribe(res=>{
        if(res.email!=null||res.email!=""){
          alert("Usuario Creado");
          this.router.navigate(['loginportal']);
        }
      });
    }
  }

  signUp(){
    this.existe = false;
    this.usuarioService.selectUser().subscribe(res=>{
      this.usuarios = res;
      for (let i = 0; i < this.usuarios.length; i++) {
        if(this.signupForm.controls['email'].value==this.usuarios[i].email){
          this.existe=true;
        }
      } 
      this.signUpGo();
    });
  } 

}
