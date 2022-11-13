import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from '../models/supplier';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})

export class SupplierService extends CommonService<Supplier> {
  protected override baseEndpoint =  '/api/proveedores';

  constructor(http: HttpClient) {
    super(http);
   }

  public filtrarPorNombre(nombre: string): Observable<Supplier[]>{
    return this.http.get<Supplier[]>(`${this.baseEndpoint}/filtrar/${nombre}`);
  }
}
