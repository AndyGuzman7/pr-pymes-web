import { Component, OnInit } from '@angular/core';

export interface Supplier {
  id: number;
  nombre: string;
  industria: string;
  correo: string;
  direccion: string;
}

const ELEMENT_DATA: Supplier[] = [
  {id: 1,nombre: 'Jose', industria: 'Venado', correo: '@gmail', direccion: 'H'},
  {id: 2,nombre: 'Juan', industria: 'Pil', correo: '@gmail', direccion: 'He'},
  {id: 3,nombre: 'Andrea', industria: 'Eco compras', correo: '@gmail', direccion: 'Li'},
  {id: 4, nombre: 'Sofia',industria: 'Sofia', correo: '@gmail', direccion: 'Be'},
  {id: 5,nombre: 'Camila', industria: 'Coboce', correo: '@gmail', direccion: 'B'},
  {id: 6,nombre: 'Claudio', industria: 'Carbon', correo: '@gmail', direccion: 'C'},
  {id: 7,nombre: 'Jose', industria: 'UGN', correo: '@gmail', direccion: 'N'},
  {id: 8,nombre: 'Valentiin', industria: 'Anchor', correo: '@gmail', direccion: 'O'},
  {id: 9,nombre: 'Hugo', industria: 'Kris', correo: '@gmail', direccion: 'F'},
  {id: 10,nombre: 'Alverto',industria: 'Trailer', correo: '@gmail', direccion: 'Ne'},
];

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  displayedColumns: string[] = ['id','nombre', 'industria', 'correo', 'direccion','acciones'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
