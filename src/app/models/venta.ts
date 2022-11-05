import { Cliente } from "./cliente";
import { DetalleVenta } from "./detalle-venta";

export class Venta {
    idVenta: number;
    fechaCreacion: string;
    fechaActualizacion: string;

    //array de la tabla detalles venta
    detallesVentas: DetalleVenta[] = [];

    //tabla cliente
    cliente: Cliente;
    idUsuario: number;
    total: number;
    status: number;



}
