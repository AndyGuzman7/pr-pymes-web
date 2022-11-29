import { Generic } from "./generic";
import { Manufactura } from "./manufactura";

export class Produccion implements Generic {
    id:number;
    nombre:string;
    estado:number;
    fecha_produccion:Date;
    ref_produccion:string;
    update_date:Date;
    
    //Manufactura
    manufacturas:Manufactura;
    productoNombre:string

    constructor( id:number,
        estado:number,
        fecha_produccion:Date,
        ref_produccion:string,
        update_date:Date,manufacturas:Manufactura) 
        {
            this.id=id;
            this.estado=estado;
            this.fecha_produccion=fecha_produccion;
            this.ref_produccion=ref_produccion;
            this.update_date=update_date;
            this.manufacturas = manufacturas
        }
}

export class ProduccionConst implements Generic {
    id:number;
    nombre:string;
    estado:number;
    fecha_produccion:Date;
    ref_produccion:string;
    update_date:Date;
   
}
