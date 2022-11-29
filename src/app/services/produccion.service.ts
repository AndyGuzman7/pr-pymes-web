import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produccion } from '../models/produccion';
import { CommonService } from './common.service';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { ManufacturaConst } from '../models/manufactura';

@Injectable({
  providedIn: 'root'
})

export class ProduccionService extends CommonService<Produccion> {
  protected override baseEndpoint =  '/api/compras/producciones';
  private baseEndpointOther =  '/api/product/';
  ///producciones/{id}/agregar-manufacturas

  constructor(http: HttpClient) {
    super(http);
  }

  public getProduccionManufactura(): Observable<Object[]>{
    return this.http.get<Object[]>(`${this.baseEndpoint}/manufactura`);
  }

  public getProducts(): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.baseEndpointOther}/manufactured`);
  }

  public addManufacturas(e: ManufacturaConst[],idProducción:number): Observable<ManufacturaConst> {
    return this.http.put<ManufacturaConst>(`${this.baseEndpoint}/${idProducción}/agregar-manufacturas`, e,
      { headers: this.cabeceras });
  }

}
