import { Generic } from "./generic";

export class Budget implements Generic {
    id:number;
    idProveedor:number;
    nombre:string;
    ref_presupuesto:string;
    ref_proveedor:string;
    base_imponible:number;
    descuentos:number;
    fecha_inicio:Date;
    presupuesto_actual:number;
    estado:number;
    update_date:Date;
    user_update:number;
}
