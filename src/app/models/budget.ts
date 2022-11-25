import { Generic } from "./generic";
import { Supplier } from "./supplier";

export class Budget implements Generic {
    id:number;
    idProveedor:number;
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
    userUpdate:number;
}
