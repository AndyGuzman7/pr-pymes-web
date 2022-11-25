import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LibroDiario } from '../models/libro-diario';
import { Venta } from '../models/venta';

@Injectable({
  providedIn: 'root'
})
export class LibroDiarioService {

  private baseEndPoint = '/api/librodiario';
  private cabecera: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  public listar(): Observable<LibroDiario[]>
  {
    return this.http.get<LibroDiario[]>(`${this.baseEndPoint}/listar`);
  }

  public listarPorPaginas(page: string, size: string): Observable<any>
  {
    const params =new HttpParams()
    .set('page',page)
    .set('size',size);
    return this.http.get<any>(`${this.baseEndPoint}/paginar`,{params:params});
  }

  public mostrarPorFechas(fecha_inicio: string, fecha_fin: string, tipo_libro: string): Observable<LibroDiario[]>
  {
    const params =new HttpParams()
    .set('fecha_inicio',fecha_inicio)
    .set('fecha_fin',fecha_fin)
    .set('tipo_libro',tipo_libro);
    return this.http.get<LibroDiario[]>
    (`${this.baseEndPoint}/mostrar`,{params:params});
  }

  //Crear libro
  crearLibro(LibroDiario) {
    return this.http.post<LibroDiario>(`${this.baseEndPoint}/`, LibroDiario, { headers: this.cabecera})
  }

  //Obtener total compras por fechas
  public selectTotal(fecha_inicio:string, fecha_fin:string): Observable<Venta[]>{
    const params =new HttpParams()
    .set('from',fecha_inicio)
    .set('to',fecha_fin);

    return this.http.get<Venta[]>(`/api/compras/detalle-pedidos/filtrar/fecha-total/`, {params:params});
  }
    
}