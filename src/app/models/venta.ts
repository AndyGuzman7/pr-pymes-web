import { Cliente } from "./cliente";
import { DetalleVenta } from "./detalle-venta";

export class Venta {
    idVenta: number;
    fechaCreacion: string;
    fechaActualizacion: string;
    detallesVentas: DetalleVenta[] = [];
    cliente: Cliente;
    idUsuario: number;
    total: number;
    status: number;



}
