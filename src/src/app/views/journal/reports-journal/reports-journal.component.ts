import { Component, OnInit } from '@angular/core';
import {LibroDiarioService} from 'src/app/services/libro-diario.service';
import { LibroDiario } from 'src/app/models/libro-diario';
import { MatTableDataSource } from '@angular/material/table';
import { Detalle } from 'src/app/models/detalle';

@Component({
  selector: 'app-reports-journal',
  templateUrl: './reports-journal.component.html',
  styleUrls: ['./reports-journal.component.css']
})
export class ReportsJournalComponent implements OnInit {
  selected: Date | null;

  constructor(private service: LibroDiarioService ) {
  }

  ngOnInit(): void {
  }

  fechaInicio:Date
  fechaFin:Date
  ELEMENT_DATA: LibroDiario[];
  dataSource: MatTableDataSource<LibroDiario>;
  displayedColumns: string[] = ['Glosa','RazonSocial','TipoLibro', 'Fecha', 'acciones'];

  dataSourceDetalles: MatTableDataSource<Detalle>;
  displayedColumnsDetalles: string[] = ['CodigoCuenta','Denominacion','Debe', 'Haber'];


  CargarReporte() {
    this.dataSourceDetalles = new MatTableDataSource([]);
    const fechaInicio = (document.getElementById('fechaInicio') as HTMLInputElement).value;
    const fechaFin = (document.getElementById('fechaFin') as HTMLInputElement).value;
    const tipo = (document.getElementById('tipo') as HTMLSelectElement).value;

    this.fechaInicio = new Date(fechaInicio);
    this.fechaFin = new Date(fechaFin)
    

    console.log(this.fechaInicio.toLocaleDateString('en-us') + ' ' + this.fechaInicio.toLocaleDateString('en-us') + ' ' + tipo);
    this.service.mostrarPorFechas(this.fechaInicio.toLocaleDateString('en-us'), this.fechaFin.toLocaleDateString('en-us'), tipo).subscribe(data => {
      this.ELEMENT_DATA = data;
      console.log(data);
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    })
  }


  Mostrar(detalles:Detalle[]){
    this.dataSourceDetalles = new MatTableDataSource(detalles);
  }

}
