import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import { LoadScriptsService } from 'src/app/load-scripts.service';
import { Rol } from 'src/app/models/rol';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-top-nav-bar-business',
  templateUrl: './top-nav-bar-business.component.html',
  styleUrls: ['./top-nav-bar-business.component.css']
})
export class TopNavBarBusinessComponent implements OnInit {

  isAdmin: boolean;
  isLogin: boolean;

  user: Usuario;
  rol: Rol;

  constructor(private _LoadScripts:LoadScriptsService, private sessionStorage: SessionStorageService) { 
    _LoadScripts.Load(["nav"]);

    this.isLogin = this.sessionStorage.retrieve('isLogin');

    if (this.isLogin) {
      this.user = this.sessionStorage.retrieve('user');
      this.rol = this.sessionStorage.retrieve('rol');    
    
      if (this.rol.rol_name == "Administrador") {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }    

      console.log(this.user);
      console.log(this.rol);
    }     

    
  }
  
  cerrarSesion() {
    this.sessionStorage.store('isLogin', false);
    this.isLogin = this.sessionStorage.retrieve('isLogin');
    this.sessionStorage.clear('user');
    this.sessionStorage.clear('rol');
    this.sessionStorage.clear('business');
  }

  ngOnInit(): void {    
  }

}
