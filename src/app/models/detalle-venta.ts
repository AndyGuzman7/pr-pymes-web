import { Venta } from "./venta";

export class DetalleVenta {
    idDetalleVenta: number;
    precioVenta: number;
    fechaCreacion: string;
    fechaActualizacion: string;
	
	//tabla venta
	venta: Venta;
	cantidad: number;
	subTotal: number;
	descuento: number;
	idProducto: number;
	status: number;

}
