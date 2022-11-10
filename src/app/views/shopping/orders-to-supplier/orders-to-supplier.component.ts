import { Component, OnInit } from '@angular/core';
export interface Orders {
  referencia: string;
  proveedor: string;
  solicitante: string;
  fechaPedido: string;
  fechaLlegada: string;
  baseImponible: string;
  estado: string;
  facturado:string;
}
const ELEMENT_DATA: Orders[] = [
  {referencia: '', proveedor: '', solicitante: '', fechaPedido:'', fechaLlegada:'', baseImponible:'', estado:'', facturado:''},
];


@Component({
  selector: 'app-orders-to-supplier',
  templateUrl: './orders-to-supplier.component.html',
  styleUrls: ['./orders-to-supplier.component.css']
})
export class OrdersToSupplierComponent implements OnInit {
  displayedColumns: string[] = ['referencia','proveedor', 'solicitante','fechaPedido','fechaLlegada', 'baseImponible','estado', 'facturado'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

  
}
