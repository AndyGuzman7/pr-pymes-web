import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})

export class ProductoService  extends CommonService<Producto>{
  protected override baseEndpoint =  '/api/product/';

  constructor(http: HttpClient) { 
    super(http);
  }


  public getProducts(): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.baseEndpoint}/manufactured`);
  }

  public getProductsForPedido(): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.baseEndpoint}/pedidoProducto`);
  }

}
