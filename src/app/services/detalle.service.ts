import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Detalle } from '../models/detalle';

@Injectable({
    providedIn: 'root'
})
export class DetalleService {
  
    private baseEndPoint = '/api/librodiario/detalle';
    private cabecera: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
    constructor(private http: HttpClient) { }
  
    //Crear libro
    crearDetalle(detalles:Detalle[]) {
      return this.http.post<Detalle>(`${this.baseEndPoint}/`, detalles, { headers: this.cabecera})
    }      
}