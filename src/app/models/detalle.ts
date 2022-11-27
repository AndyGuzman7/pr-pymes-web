import { LibroDiario } from "./libro-diario";
import { Cuenta } from "./cuenta";
export class Detalle {
    id_detalle: number = 0;
    libroDiario: LibroDiario = new LibroDiario();
    tipo_detalle: string = '';
    monto: number = 0;
    cuenta: Cuenta = new Cuenta();
}
