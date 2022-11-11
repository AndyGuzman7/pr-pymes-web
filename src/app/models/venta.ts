import { Cliente } from "./cliente";
import { DetalleVenta } from "./detalle-venta";

export class Venta {
    idVenta: number;
    fechaCreacion: Date;
    fechaActualizacion: Date;

    //array de la tabla detalles venta
    detallesVentas: DetalleVenta[] = [];

    //tabla cliente
    cliente: Cliente;
    idUsuario: number;
    total: number;
    status: number;
    fechaResumen : string;

    fecha(): string {
        return this.fechaActualizacion.getFullYear().toString();
    }
    constructor()
    {
        this.fechaResumen = this.fecha();
    }

}
