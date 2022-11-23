import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { CartService } from 'src/app/services/cart.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-loginportal',
  templateUrl: './loginportal.component.html',
  styleUrls: ['./loginportal.component.scss']
})
export class LoginportalComponent implements OnInit {
  public loginForm!: FormGroup;
  public usuario: any;
  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }
  constructor(private cartService : CartService, private usuarioService : UsuarioService, private formBuilder : FormBuilder, private http: HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  login(){
    if(this.loginForm.controls['email'].value!=''&&this.loginForm.controls['password'].value!=''){
      this.usuarioService.loginUser(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
      .subscribe(res=>{
        if(res.email!=null||res.email!=""){
          this.router.navigate(['products']);
          this.cartService.addSession(res.id, res.email, res.name, res.last_name);
        }else{
          alert("Email o Contraseña Incorrecta");
        }
      },err=>{
        alert("Email o Contraseña Incorrecta");
      }) 
      
      
    }else{
      alert("Ingrese los datos");
    }
  }

}
