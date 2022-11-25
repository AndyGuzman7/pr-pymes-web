import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {Router, ActivatedRoute} from '@angular/router';
import {VentaService} from 'src/app/services/venta.service'
import {Venta} from 'src/app/models/venta'
export interface Compra {
  fechaCreacion: Date;
  total: number;
}

@Component({
  selector: 'app-see-sales-journal',
  templateUrl: './see-sales-journal.component.html',
  styleUrls: ['./see-sales-journal.component.css']
})
export class SeeSalesJournalComponent implements OnInit {

  fechaInicio:Date;
  fechaFin:Date;
  ventas:Venta[]=[];
  compras:Compra[]=[];
  id:number;

  displayedColumns: string[] = ['product','total'];
  dataSource = new MatTableDataSource();

  constructor(private router:Router, private route:ActivatedRoute, private service: VentaService) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'] as number;
    })
  }

  Volver() :void {
    this.router.navigate(['libro_diario']);
  }

  CargarReporte() :void {
    const fechaInicio = (document.getElementById('fechaInicio') as HTMLInputElement).valueAsDate;
    const fechaFin = (document.getElementById('fechaFin') as HTMLInputElement).valueAsDate;

    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    
    if(this.fechaFin && this.fechaInicio){
      if(this.id == 2) this.CargarVentas();

      if(this.id == 1) this.CargarCompras();
    }
  }

  CargarVentas(): void{
    this.service.selectTotal(this.fechaInicio.toISOString(), this.fechaFin.toISOString()).subscribe(data => {
      this.ventas = data;
      this.dataSource = new MatTableDataSource(this.ventas);
      this.ventas = [];
    })
  }

  CargarCompras() :void {
    this.compras = [
      {fechaCreacion: new Date('11-05-2022'), total: 860.15},
      {fechaCreacion: new Date('11-06-2022'), total: 560.70},
      {fechaCreacion: new Date('11-07-2022'), total: 170.90},
      {fechaCreacion: new Date('11-08-2022'), total: 140.78}
    ];
    this.dataSource = new MatTableDataSource(this.compras);
    this.compras = [];
  }
}
