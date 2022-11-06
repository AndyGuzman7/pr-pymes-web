import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {Cliente} from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseEndpoin = 'http://localhost:8090/api/clientes';
  constructor(private http: HttpClient) { }

  public listar(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseEndpoin);
  }
  
  //public ver(idCliente: number): Observable<Cliente>{
  //  return this.http.get<Cliente[]>(`${this.baseEndpoin}/${idCliente}`);
  //}
}
