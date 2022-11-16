export class Usuario {

    public idUsuario: number;
    public nombre: string;
    public apellidos: string;
    public fechaCreacion?: string;
    public status?: number;
    public fechaActualizacion?: string;
    public correo?: string; 
    public contrasenia: string;
    
    public get IdUsuario()
    {
        return this.idUsuario;
    }
    constructor()
    {
        this.status = 1;
    }

    public set IdUsuario(idUsuario:number)
    {
        this.idUsuario = idUsuario;
    }

    
    public get Nombre()
    {
        return this.nombre;
    }
    
    public set Nombre (nombre: string)
    {
        this. nombre = nombre;
    }
    
    public get Apellidos ()
    {
        return this. apellidos;
    }
    public set Apellidos(apellidos : string)
    {
        this. apellidos = apellidos;
    }
    
    public get Correo()
    {
        return this. correo;
    }
    
    public set Correo(correo : string)
    {
        this. correo = correo;
    }
    
    public get Contrasenia()
    {
        return this.contrasenia;
    }

    public set Contrasenia(contrasenia : string)
    {
        this.contrasenia = contrasenia;
    }
    public get Status()
    {
        return this. status;
    }

    public set Status(status : number)
    {
        this. status = status;
    }
}
 