import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ClienteService } from 'src/app/services/cliente.service';
export interface Venta {
  id: number;
  producto: string;
  cantidad: number;
  subtotal: number;
}
export interface DatosCliente{
  id: number;
  CI: number;
  Cliente: string;
}

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  public titulo: string = 'Listado de ventas';

  ELEMENT_DATA: Venta[] = [
    {id: 1,producto: 'Sopa', cantidad: 3, subtotal: 11},
    {id: 2,producto: 'CocaCola', cantidad: 1, subtotal: 15},
    {id: 3,producto: 'Oreo', cantidad: 5, subtotal: 4},
  ];
  displayedColumns: string[] = ['id','producto', 'cantidad', 'subtotal'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

constructor(private service: ClienteService) {

}

  ngOnInit(): void {
    this.service.listar().subscribe(cliente => {
      //this.cliente = cliente;
    });
  }


}