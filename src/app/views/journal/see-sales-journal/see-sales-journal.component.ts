import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {Router, ActivatedRoute} from '@angular/router';

export interface SeeSales {  
  product: string;
  total: number;
}

@Component({
  selector: 'app-see-sales-journal',
  templateUrl: './see-sales-journal.component.html',
  styleUrls: ['./see-sales-journal.component.css']
})
export class SeeSalesJournalComponent implements OnInit {

  ELEMENT_DATA: SeeSales[] = [
    {product: '21/11/2022', total: 3506},
    {product: '10/07/2022', total: 5060},
    {product: '24/05/2022', total: 2030},
    {product: '29/01/2022', total: 1000}

  ];

  fechaInicio:Date;
  fechaFin:Date;

  displayedColumns: string[] = ['product','total'];
  dataSource = new MatTableDataSource();

  constructor(private router:Router, private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      console.log(id);
    })
  }

  Volver() :void {
    this.router.navigate(['libro_diario']);
  }

  CargarReporte() :void {
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    const fechaInicio = (document.getElementById('fechaInicio') as HTMLInputElement).valueAsDate;
    const fechaFin = (document.getElementById('fechaFin') as HTMLInputElement).valueAsDate;
    const tipo = (document.getElementById('tipo') as HTMLSelectElement).value;

    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    

    console.log(this.fechaInicio.toLocaleDateString('en-us') + ' ' + this.fechaInicio.toLocaleDateString('en-us') + ' ' + tipo);
  }

}
