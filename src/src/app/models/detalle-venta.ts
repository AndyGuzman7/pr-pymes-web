import { Venta } from "./venta";

import {Producto} from "./producto"

export class DetalleVenta {
     idDetalleVenta: number;
     precioVenta: number;
     fechaCreacion: Date;
     fechaActualizacion: Date;
	 cantidad: number;
	 subTotal: number;
	 descuento: number;
	 idProducto: number;
	 status: number;

	public producto : Producto;

	constructor(producto:Producto)
	{
		this.producto = producto;
		this.idProducto = producto.productID;
		this.precioVenta = producto.price;
		this.status = 1;
		this.descuento = 0.0;
		this.cantidad = 1;
		this.subTotal = this.precioVenta;
		
	}

	public addCantidad()
	{
		this.cantidad++;
		this.subTotal = this.cantidad * this.precioVenta;
	}

	public removeCantidad()
	{
		if(this.cantidad > 1)
		{
			this.cantidad--;
			this.subTotal = this.cantidad * this.precioVenta;
		}
	}



	public get Producto()
	{
		return this.producto;
	}

	public set Producto(producto:Producto)
	{
		this.producto = producto;
	}

	public get PrecioVenta()
	{
		return this.precioVenta;
	}

	public set PrecioVenta(precioVenta : number)
	{
		this.precioVenta = precioVenta;
	}

	public get IdDetalleVenta()
	{
		return this.idDetalleVenta;
	}

	public set IdDetalleVenta(idDetalleVenta : number)
	{
		this.idDetalleVenta = idDetalleVenta;
	}

	public get Cantidad()
	{
		return this.cantidad;
	}

	public set Cantidad(cantidad:number)
	{
		this.cantidad = cantidad;
	}

	public get SubTotal()
	{
		return this.subTotal;
	}

	public set SubTotal(subTotal:number)
	{
		this.subTotal = subTotal;
	}

	public get IdProducto()
	{
		return this.idProducto;
	}
	public set IdProducto(idProducto:number)
	{
		this.idProducto = idProducto;
	}



}
