import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})

export class PedidoService extends CommonService<Pedido> {
  protected override baseEndpoint =  '/api/compras/pedidos';

  constructor(http: HttpClient) {
    super(http);
   }

  public listadoPedidos(): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(`${this.baseEndpoint}/listaPedidos`);
  }

}
