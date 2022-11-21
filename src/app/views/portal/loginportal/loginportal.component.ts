import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-loginportal',
  templateUrl: './loginportal.component.html',
  styleUrls: ['./loginportal.component.scss']
})
export class LoginportalComponent implements OnInit {
  public loginForm!: FormGroup;
  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }
  constructor(private cartService : CartService, private formBuilder : FormBuilder, private http: HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  login(){
    this.http.post<any>("http://localhost:3500/iniciar-sesion", this.loginForm.value)
    .subscribe(res=>{
      if(res.isOk==true){
        this.router.navigate(['products']);
        this.cartService.addSession(res. id_usuario, res.res.email, res.first_name, res.last_name);
      }else{
        alert(res.msj);
      }
    },err=>{
      alert("wrong");
    })
  }

}
