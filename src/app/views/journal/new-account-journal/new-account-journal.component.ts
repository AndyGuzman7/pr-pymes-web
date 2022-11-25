import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import {LoadScriptsService} from 'src/app/load-scripts.service'
import {CuentaService} from 'src/app/services/cuenta.service';
import {Cuenta} from 'src/app/models/cuenta'
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-account-journal',
  templateUrl: './new-account-journal.component.html',
  styleUrls: ['./new-account-journal.component.css']
})
export class NewAccountJournalComponent implements OnInit {

  constructor(private service: CuentaService, private _LoadScripts:LoadScriptsService, private router:Router ) { 
    _LoadScripts.Load(["accordion"]);
  }

  idEmpresa = 1;
  ELEMENT_DATA: Cuenta[];
  cuentaSeleccionada: Cuenta = new Cuenta();
  dataSource: MatTableDataSource<Cuenta>;
  
  displayedColumns: string[] = ['codigoCuenta','denominacion','acciones'];
  
  
 
  ngOnInit(): void {
    this.CargarCuentas();
  }

  CargarCuentas(){
    this.service.selectAccounts(this.idEmpresa)
    .subscribe(data=>{
      this.ELEMENT_DATA = data;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    })  
  }

  CargarCuenta(cuenta:Cuenta){
    this.cuentaSeleccionada = cuenta;
  }

  Cancelar(){
    this.cuentaSeleccionada = new Cuenta();
    window.location.reload();
  }

  Guardar() {
    if (this.cuentaSeleccionada.codigoCuenta.trim() != "" && this.cuentaSeleccionada.denominacion.trim() != "") {
      if (this.cuentaSeleccionada.idCuenta ===0 ) {
        this.cuentaSeleccionada.idEmpresa = this.idEmpresa;
               
        this.service.createAccount(this.cuentaSeleccionada)
        .subscribe(data => {
          this.CargarCuentas();
        })
      } else {
        console.log(this.cuentaSeleccionada.idCuenta); 
        this.service.updateAccount(this.cuentaSeleccionada)
        .subscribe(data => {
          this.CargarCuentas();          
        })
      }
      this.Cancelar();
    }  else { 
      alert("Debe llenar todos los campos");
    }
  }
  
  EliminarCuenta(cuenta:Cuenta) {
    if ( confirm('Estas seguro de eliminar esta cuenta\nSe eliminará de forma permanente') ) {
      this.service.deleteAccount(cuenta.idCuenta)
      .subscribe(data => {
        this.CargarCuentas();     
      })
    } 
    this.Cancelar();     
  }
}
