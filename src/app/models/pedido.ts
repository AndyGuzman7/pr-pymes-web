import { Budget } from "./budget";
import { DetallePedido } from "./detalle-pedido";
import { Generic } from "./generic";

export class Pedido implements Generic {
    id:number;
    nombre:string;
    fecha_orden:Date;
    condiciones_pago:number;
    tipo_pago:number;
    fecha_entrega:Date;
    nota:string;
    divisa:number;
    estado:number;
    update_date:Date;
    metodo_pedido:number;
    presupuesto: Budget;
    detalles_pedidos: DetallePedido[] = [];
}
