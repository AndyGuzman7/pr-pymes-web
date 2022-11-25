import { Budget } from "./budget";
import { Generic } from "./generic";

export class Supplier implements Generic {
    id:number;
    nombre:string;
    direccion:string;
    telefono:string;
    email:string;
    logotipo:string;
    estado:number;
    update_date:Date;
    presupuestos: Budget[] = [];
}