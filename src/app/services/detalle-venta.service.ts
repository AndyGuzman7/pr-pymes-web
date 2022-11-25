import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetallePedido } from '../models/detalle-pedido';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class DetalleVentaService extends CommonService<DetallePedido> {
  protected override baseEndpoint =  '/api/compras/detalle-pedidos';

  constructor(http: HttpClient) {
    super(http);
   }

   

}
