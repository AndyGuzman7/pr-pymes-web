import { Generic } from "./generic";
import { Pedido } from "./pedido";

export class DetallePedido implements Generic {
    id:number;
    nombre:string;
    cantidad:number;
    descuento:number;
    precio_unitario:number;
    pedido:Pedido;
    id_producto:number;

}
