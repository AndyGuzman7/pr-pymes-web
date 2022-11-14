import { Generic } from "./generic";

export class Butget implements Generic {
    id:number;
    idProveedor:number;
    nombre:string;
    ref_presupuesto:string;
    base_imponible:number;
    descuentos:number;
    fecha_inicio:Date;
    presupuesto_actual:number;
    estado:number;
    update_date:Date;
    user_update:number;
}
