import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CommonService } from './common.service';
import { Injectable } from '@angular/core';
import { Budget } from '../models/budget';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService extends CommonService<Budget>{
  protected override baseEndpoint =  '/api/compras/presupuestos';

  constructor(http: HttpClient) {
    super(http);
  }

  public joinPresupuestoProveedorAll(): Observable<Budget[]>{
    return this.http.get<Budget[]>(`${this.baseEndpoint}/proveedor`);
  }
}
