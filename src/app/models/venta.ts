import { Cliente } from "./cliente";
import { DetalleVenta } from "./detalle-venta";

export class Venta {
    idVenta: number;
    fechaCreacion: Date;
    fechaActualizacion: Date;
    detallesVentas: DetalleVenta[] = [];
    cliente: Cliente;
    idUsuario: number;
    total: number;
    status: number;
    fechaResumen : string;
    constructor()
    {
        this.total = 0.0;
    }

    getTotal()
    {
        let total = 0.0;
        this.detallesVentas.forEach(element => {
            total = total + (element.subTotal)
        }); 
        this.total = total;
    }

    addDetallesVentas(detalleVenta : DetalleVenta)
    {
        this.detallesVentas.push(detalleVenta);
        this.total  = this.total + detalleVenta.subTotal;
    }

    fecha(): string {
        return this.fechaActualizacion.getFullYear().toString();
    }

}
