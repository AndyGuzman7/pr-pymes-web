import { VariableBinding } from "@angular/compiler";

export class Producto {
    idProducto: number;
    producto:string;
    descripcion:string;
    cantidad:number;
    precio:number;
    subtotal: number;
    total?:number;
}
