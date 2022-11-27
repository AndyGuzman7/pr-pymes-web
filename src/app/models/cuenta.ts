import { Detalle } from "./detalle";

export class Cuenta {

    idCuenta: number = 0;
    codigoCuenta: string = "";
    denominacion: string = "";    
    idEmpresa: number = 0;
    status: number = 0;
    detalles:Detalle[]=[]   
    
    constructor()
    {
        this.status = 1;
    }

    public get IdCuenta()
    {
        return this.idCuenta;
    }

    public set IdCuenta(idCuenta:number)
    {
        this.idCuenta = idCuenta;
    }

    public get CodigoCuenta()
    {
        return this.codigoCuenta;
    }
    
    public set CodigoCuenta(codigoCuenta:string)
    {
        this.codigoCuenta = codigoCuenta;
    }

    public get Denominacion()
    {
        return this.denominacion;
    }

    public set Denominacion(denominacion:string)
    {
        this.denominacion = denominacion;
    }

    public get IdEmpresa()
    {
        return this.idEmpresa;
    }

    public set IdEmpresa(idEmpresa:number)
    {
        this.idEmpresa = idEmpresa;
    }

    public get Status()
    {
        return this.status;
    }

    public set Status(status:number)
    {
        this.status = status;
    }
}