import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetallePedido } from '../models/detalle-pedido';
import { Pedido } from '../models/pedido';
import { Producto } from '../models/producto';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})

export class PedidoService extends CommonService<Pedido> {
  protected override baseEndpoint =  '/api/compras/pedidos';
  private baseEndpointOther =  '/api/product/';

  constructor(http: HttpClient) {
    super(http);
   }

  public listadoPedidos(): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(`${this.baseEndpoint}/listaPedidos`);
  }

  public getPedidoDetallePedido(): Observable<Object[]>{
    return this.http.get<Object[]>(`${this.baseEndpoint}/detallePedido`);
  }

  public getProducts(): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.baseEndpointOther}/pedidoProducto`);
  }

  public insertManufacturas(e: DetallePedido[], idPedido:number): Observable<DetallePedido> {
    return this.http.put<DetallePedido>(`${this.baseEndpoint}/${idPedido}/agregar-detallePedidos`, e,
      { headers: this.cabeceras });
  }


}
