import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface Supplier {
  id: number;
  nombre: string;
  industria: string;
  correo: string;
  direccion: string;
}

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  ELEMENT_DATA: Supplier[] = [
    {id: 1,nombre: 'Jose', industria: 'Venado', correo: '@gmail', direccion: 'H'},
    {id: 2,nombre: 'Juan', industria: 'Pil', correo: '@gmail', direccion: 'He'},
    {id: 3,nombre: 'Andrea', industria: 'Eco compras', correo: '@gmail', direccion: 'Li'},
    {id: 4, nombre: 'Sofia',industria: 'Sofia', correo: '@gmail', direccion: 'Be'},
    {id: 5,nombre: 'Camila', industria: 'Coboce', correo: '@gmail', direccion: 'B'},
  
  
  ];
  displayedColumns: string[] = ['id','nombre', 'industria', 'correo', 'direccion','acciones'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  
  constructor() { }

  ngOnInit(): void {
  }

  
  /*filtro para buscar proveedores por letra*/
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /*Agregar metodos para eliminar proveedores*/

}
