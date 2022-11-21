import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from 'src/app/load-scripts.service';
import {LibroDiarioService} from 'src/app/services/libro-diario.service';
import {CuentaService} from 'src/app/services/cuenta.service';
import {DetalleService} from 'src/app/services/detalle.service';
import { LibroDiario } from 'src/app/models/libro-diario';
import { MatTableDataSource } from '@angular/material/table';
import { Detalle } from 'src/app/models/detalle';
import { Cuenta } from 'src/app/models/cuenta';
import { concat } from 'rxjs';



@Component({
  selector: 'app-journal-principal',
  templateUrl: './journal-principal.component.html',
  styleUrls: ['./journal-principal.component.css']
})
export class JournalPrincipalComponent implements OnInit { 

  displayedColumns: string[] = ['account','should', 'haber'];
  ELEMENT_DATA : Detalle[] = []
  dataSource = new MatTableDataSource<Detalle>;
  libro:LibroDiario = new LibroDiario();
  detalle:Detalle = new Detalle();
  cuenta:Cuenta = new Cuenta();
  fecha:Date;
  detalles:Detalle[] = [] 
 
  constructor(private _LoadScripts:LoadScriptsService, private serviceDetalle: DetalleService, private service: LibroDiarioService,  private serviceCuenta: CuentaService) {
    _LoadScripts.Load(["journal_type"])
  }

  ngOnInit(): void {
    
  }

  Cancelar(): void {
    window.location.reload();
  }

  Registrar() {
    if (this.ELEMENT_DATA.length > 0) {
      const glosa = (document.getElementById('glosa') as HTMLInputElement).value;
      const razonSocial = (document.getElementById('razonSocial') as HTMLInputElement).value;
      const fecha = (document.getElementById('fecha') as HTMLInputElement).value;
      const tipo = (document.getElementById('tipoLibro') as HTMLSelectElement).value;
      
      this.fecha = new Date(fecha);
      this.libro.fecha =  this.fecha;
      this.libro.glosa = glosa;
      this.libro.razon_social = razonSocial;
      this.libro.tipo_libro = tipo;

      this.service.crearLibro(this.libro).subscribe(data => {
        this.libro = new LibroDiario();
        this.libro = data
        for (let element of this.ELEMENT_DATA) {
          element.libroDiario = this.libro;
          this.detalles.push(element);
        }
        this.serviceDetalle.crearDetalle(this.detalles).subscribe(data=>{
            console.log(data)            
        })
        alert('Se ha creado el libro diario con éxito');
        this.Cancelar();

      })      
    }
  }

  AniadirDetalle() {
    var monto = (document.getElementById('monto') as HTMLInputElement);
    var cuenta = (document.getElementById('cuenta') as HTMLInputElement);
    const tipo = (document.getElementById('type') as HTMLSelectElement).value;
    
    this.serviceCuenta.selectByCode(cuenta.value).subscribe(data => {
      this.cuenta = data;
      if (this.cuenta) {
        this.detalle.cuenta = this.cuenta;
        this.detalle.tipo_detalle = tipo;
        this.detalle.monto = monto.valueAsNumber;
        
        this.ELEMENT_DATA.push(this.detalle);
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        this.detalle = new Detalle();
        this.cuenta = new Cuenta();
        monto.value = "";
        cuenta.value = "";

      } else {
        alert('No existe ese numero de cuenta')
      }     
    })    
  }

}
