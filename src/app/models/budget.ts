import { Generic } from "./generic";
import { Pedido } from "./pedido";
import { Supplier } from "./supplier";

export class Budget implements Generic {
    id:number;
    idProveedor:number;
    idPresupuesto:number;
    nombre:string;
    proveedor: Supplier;
    refPresupuesto:string;
    refProveedor:string;
    baseImponible:number;
    descuentos:number;
    fechaInicio:Date;
    presupuestoActual:number;
    estado:number;
    updateDate:Date;
    pedidos: Pedido[] = [];
}
