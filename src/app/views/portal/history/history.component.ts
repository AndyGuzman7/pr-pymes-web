import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router, TitleStrategy } from '@angular/router';
import { DetalleVenta } from "../../../models/detalle-venta";
import { Venta } from "../../../models/venta";
import { Producto } from "../../../models/producto";
import { Cliente } from "../../../models/cliente";
import { VentaService } from "src/app/services/venta.service";
import { ClienteService } from "src/app/services/cliente.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  public ventas : any = [];
  public ventasFinal : any = [];
  public clientes : Cliente[] = [];
  public idClientVenta : number;
  public fecha : string;
  public grandTotal : number = 0;
  public cantidadTotal : number = 0;
  public first_name : any = sessionStorage.getItem('name');
  public last_name : any = sessionStorage.getItem('lname');
  public email : any = sessionStorage.getItem('email');
  public id_user : any = sessionStorage.getItem('id_user');
  constructor(private cartService : CartService, private clienteService : ClienteService, private router : Router, private ventaService : VentaService) { }

  ngOnInit(): void {
    this.clienteService.selectClient().subscribe(res=>{
      this.clientes = res;
      for (let index = 0; index < this.clientes.length; index++) {
        if(this.clientes[index].correo==this.email){
          this.idClientVenta = this.clientes[index].idCliente;
        }
      }
      this.getVentaClient(this.idClientVenta);

    });
  }

  getVentaClient(idCliente: any){
    this.ventaService.selectVenta()
    .subscribe(res=>{
      this.ventas = res;
      let indexEliminar ;
      for (let index = 0; index < this.ventas.length; index++) {
        if(this.ventas[index].cliente.idCliente == idCliente){
          this.ventas[index].fechaCreacion = this.ventas[index].fechaCreacion.substring(0,10);
          this.grandTotal+=this.ventas[index].total;

          this.cantidadTotal = 0;
          for (let index2 = 0; index2 < this.ventas[index].detallesVentas.length; index2++) {
            this.cantidadTotal += this.ventas[index].detallesVentas[index2].cantidad;
          }
          this.ventas[index].cantidadTotal = this.cantidadTotal;
          this.ventasFinal.push(this.ventas[index]);
        }
      }
    })
  }

  showOrder(a: any){
    sessionStorage.setItem('idVerPedido', a);
    this.router.navigate(['checkout']);
  }

}
