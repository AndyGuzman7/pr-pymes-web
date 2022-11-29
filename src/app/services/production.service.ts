import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Budget } from '../models/budget';
import { ManufacturaConst } from '../models/manufactura';
import { ProduccionConst } from '../models/produccion';
import { Producto } from '../models/producto';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class ProductionService extends CommonService<ProduccionConst> {
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

  public addManufacturas(e: ManufacturaConst[],idProduccion:number): Observable<ManufacturaConst> {
    return this.http.put<ManufacturaConst>(`${this.baseEndpoint}/${idProduccion}/agregar-manufacturas`, e,
      { headers: this.cabeceras });
  }

}
