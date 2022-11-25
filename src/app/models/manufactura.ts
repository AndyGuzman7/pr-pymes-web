export class Manufactura {
    id:number;
    cantidad:number;
    id_producto:number;
    id_produccion:number;

    nombreProducto:string;

    constructor(   id:number,
        cantidad:number,
        id_producto:number,nombreProducto:string
    ) 
        {
            this.id=id;
            this.cantidad=cantidad;
            this.id_producto=id_producto;
this.nombreProducto=nombreProducto;
        }
}
