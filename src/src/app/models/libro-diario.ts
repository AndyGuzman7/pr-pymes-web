import { Detalle } from "./detalle";

export class LibroDiario {
    id: number = 0;
    detalles: Detalle []= [];
    glosa: string = '';
    razon_social: string = '';
    tipo_libro: string = '';
    fecha: Date = new Date();

}
