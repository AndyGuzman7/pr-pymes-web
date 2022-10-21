import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  public titulo: string = 'Listado de ventas';
  constructor() { }

  ngOnInit(): void {
  }

}
