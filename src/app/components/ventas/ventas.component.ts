import { PRECONNECT_CHECK_BLOCKLIST } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import {LoadScriptsService} from 'src/app/load-scripts.service'
declare var js;
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  public titulo: string = 'Listado de ventas';
  constructor(private _LoadScripts:LoadScriptsService) { 
    _LoadScripts.Load(["accordion"]);
  }

   ngOnInit(): void {
    //console.table(this.producto1);
    
  }
  producto1 : Producto = {
    idProducto: 1,
    producto: 'Portatil',
    descripcion: 'i5 75000QH 1TB SSD CRUSSIAL',
    cantidad: 2,
    precio: 1230,
    subtotal: 1
  }
  producto2 : Producto = {
    idProducto: 2,
    producto: 'Licuadora PHILIPS',
    descripcion: 'Modelo K3829 + Trituradora + Envase',
    cantidad: 2,
    precio: 240,
    subtotal: 1
  }
  producto3 : Producto = {
    idProducto: 3,
    producto: 'Parlante SONY-X2H3',
    descripcion: 'Sonido envolvente, 5 bocinas',
    cantidad: 2,
    precio: 150,
    subtotal: 1
  }

  productos = [
    this.producto1,
    this.producto2,
    this.producto3
  ]
  data = Object.values(this.productos)
  
  
  public deleteOneProductList (id: number) {
    this.data = this.data.filter((item) => item.idProducto !== id)
  }



}

