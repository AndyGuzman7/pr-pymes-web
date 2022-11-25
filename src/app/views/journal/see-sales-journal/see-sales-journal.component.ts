import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {Router, ActivatedRoute} from '@angular/router';
import {VentaService} from 'src/app/services/venta.service'
import {Venta} from 'src/app/models/venta'
import {LibroDiarioService} from 'src/app/services/libro-diario.service';

@Component({
  selector: 'app-see-sales-journal',
  templateUrl: './see-sales-journal.component.html',
  styleUrls: ['./see-sales-journal.component.css']
})
export class SeeSalesJournalComponent implements OnInit {

  fechaInicio:Date;
  fechaFin:Date;
  ventas:Venta[]=[];
  id:number;

  displayedColumns: string[] = ['product','total'];
  dataSource = new MatTableDataSource();

  constructor(private router:Router, private route:ActivatedRoute, private serviceLibro: LibroDiarioService, private service: VentaService) { }
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
    this.serviceLibro.selectTotal(this.fechaInicio.toISOString(), this.fechaFin.toISOString()).subscribe(data => {
      this.ventas = data;
      this.dataSource = new MatTableDataSource(this.ventas);
      this.ventas = [];
    })
  }
}
