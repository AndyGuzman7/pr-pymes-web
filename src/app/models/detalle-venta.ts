import { Venta } from "./venta";

import {Producto} from "./producto"

export class DetalleVenta {
    private _idDetalleVenta: number;
    private _precioVenta: number;
    private _fechaCreacion: Date;
    private _fechaActualizacion: Date;
	private _cantidad: number;
	private _subTotal: number;
	private _descuento: number;
	private _idProducto: number;
	private _status: number;
	private _producto : Producto;

	constructor(producto:Producto)
	{
		this._producto = producto;
		this._idProducto = producto.productID;
		this._precioVenta = producto.price;
		this._status = 1;
		this._descuento = 0.0;
		this._cantidad = 1;
		this._subTotal = this._precioVenta;
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

	public get producto()
	{
		return this._producto;
	}

	public set producto(producto:Producto)
	{
		this._producto = producto;
	}

	public get precioVenta()
	{
		return this._precioVenta;
	}

	public set precioVenta(precioVenta : number)
	{
		this._precioVenta = precioVenta;
	}

	public get idDetalleVenta()
	{
		return this._idDetalleVenta;
	}

	public set idDetalleVenta(idDetalleVenta : number)
	{
		this.idDetalleVenta = idDetalleVenta;
	}

	public get cantidad()
	{
		return this._cantidad;
	}

	public set cantidad(cantidad:number)
	{
		this._cantidad = cantidad;
	}

	public get subTotal()
	{
		return this._subTotal;
	}

	public set subTotal(subTotal:number)
	{
		this._subTotal = subTotal;
	}

	public get idProducto()
	{
		return this._idProducto;
	}
	public set idProducto(idProducto:number)
	{
		this._idProducto = idProducto;
	}



}
