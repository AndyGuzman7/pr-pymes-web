import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Budget } from '../models/budget';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class ProductionService extends CommonService<Budget> {
  protected override baseEndpoint =  '/api/compras/producciones';

  constructor(http: HttpClient) {
    super(http);
  }

}
