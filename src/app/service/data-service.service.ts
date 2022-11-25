import { Injectable } from '@angular/core';
import { Empresa } from '../models/empresa';
import { Rol } from '../models/rol';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  usuario : Usuario;
  isAdmin: boolean;
  isEmployee : boolean;
  isLogin: boolean;
  business:Empresa;

  user: Usuario;
  rol: Rol;

  constructor() { }

  addUser(user:Usuario)
  {
    this.user = user;
  }
  addRol(rol:Rol)
  {
    this.rol= rol;
    let idRol = rol.id;
    if(idRol == 1)
    {
        this.isAdmin = true;
    }
    else if(idRol == 1 && rol.rol_name == 'Venta')
    {
        this.isEmployee = true;
    }
  }

  addBus(bus: Empresa)
  {
    this.business = bus;
  }

  addLoginStatus(isLogin:boolean)
  {
    this.isLogin = isLogin;
  }
}