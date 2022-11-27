import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DetachedRouteHandle } from '@angular/router';
import { Venta } from '../models/venta';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private http: HttpClient){}

  Url='http://localhost:8080/ventas';
  private baseEndpoint = 'http://localhost:8090/api/ventas';
  private cabecera: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  getList(){
    return this.http.get<Venta[]>(this.baseEndpoint);
  }

  public selectVenta(): Observable<Venta[]>{
    return this.http.get<Venta[]>(this.baseEndpoint);
  }

  delete(id: number){
    return this.http.delete(this.baseEndpoint+'/'+id);
  }

  public editVenta(venta: Venta): Observable<Venta>{
    return this.http.put<Venta>(`${this.baseEndpoint}/${venta.idVenta}`, venta , {headers: this.cabecera});
  }

  public deleteVenta(idVenta: number): Observable<void>{
    return this.http.delete<void>(`${this.baseEndpoint}/${idVenta}`);
  }

  getRegister(id: number){
    return this.http.get<Venta>(this.baseEndpoint+'/'+id);
  }


}
