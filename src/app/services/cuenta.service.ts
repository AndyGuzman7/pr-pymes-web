import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cuenta } from '../models/cuenta';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

    private baseEndpoint = '/api/librodiario/Cuenta/';
    private cabecera: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    constructor(private http: HttpClient) { }

    //Obtener cuentas por empresa
    selectAccounts(id:number) {
        return this.http.get<Cuenta[]>(this.baseEndpoint + id)
    }
    //Crear cuenta
    createAccount(cuenta: Cuenta) {
        return this.http.post<Cuenta[]>(this.baseEndpoint, cuenta, { headers: this.cabecera})
    }
    //Actualizar cuenta
    updateAccount(cuenta: Cuenta) {
        return this.http.put<Cuenta[]>(this.baseEndpoint + cuenta.idCuenta, cuenta, { headers: this.cabecera})
    }
    //Eliminar cuenta
    deleteAccount(idCuenta:number) {
        return this.http.delete<Cuenta[]>(this.baseEndpoint + idCuenta)
    }
}