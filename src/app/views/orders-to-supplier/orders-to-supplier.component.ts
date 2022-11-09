import { Component, OnInit } from '@angular/core';
export interface Supplier {
  id: number;
  pedido: string;
  fecha: string;
  
}
const ELEMENT_DATA: Supplier[] = [
  {id: 1, pedido: 'Pedido por Inicio de mes', fecha: '02/11/2022'},
  {id: 2, pedido: 'Pedido por Inicio de mes', fecha: '02/11/2022'},
  {id: 3, pedido: 'Pedido por Inicio de mes', fecha: '02/11/2022'},
];


@Component({
  selector: 'app-orders-to-supplier',
  templateUrl: './orders-to-supplier.component.html',
  styleUrls: ['./orders-to-supplier.component.css']
})
export class OrdersToSupplierComponent implements OnInit {
  displayedColumns: string[] = ['id','pedido', 'fecha', 'acciones'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
