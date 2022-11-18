import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LibroDiario } from '../models/libro-diario';

@Injectable({
  providedIn: 'root'
})
export class LibroDiarioService {

  private baseEndPoint = 'http://localhost:8090/api/librodiario';

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
    
}