import { Budget } from "./budget";
import { DetallePedido } from "./detalle-pedido";
import { Generic } from "./generic";

export class Pedido implements Generic {
    id:number;
    idPedido:number;
    nombre:string;
    fechaOrden:Date;
    condicionesPago:number;
    tipoPago:number;
    fechaEntrega:Date;
    nota:string;
    divisa:number;
    estado:number;
    updateDate:Date;
    metodoPedido:number;
    presupuesto: Budget;
    idpresupuesto: number;
    proveedor_id: number;
    detalles_pedidos: DetallePedido[] = []; 
}
