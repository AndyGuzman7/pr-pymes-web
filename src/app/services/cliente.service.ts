import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseEndpoin = 'http://localhost:8090/api/clientes';
  constructor(private http: HttpClient) { }
}
