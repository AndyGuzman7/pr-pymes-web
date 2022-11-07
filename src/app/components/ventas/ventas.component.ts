import { PRECONNECT_CHECK_BLOCKLIST } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { Cliente } from 'src/app/models/cliente';
import {LoadScriptsService} from 'src/app/load-scripts.service'
import { VentaService } from 'src/app/services/venta.service';
import {Venta} from 'src/app/models/venta'
import {Router} from '@angular/router';
import { DetalleVenta } from 'src/app/models/detalle-venta';
declare var js;
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})

export class VentasComponent implements OnInit {
  public titulo: string = 'Listado de ventas';



  ventas: Venta[];
  constructor(private _LoadScripts:LoadScriptsService, private service: VentaService, private router:Router) { 
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
    subtotal: 2
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

  listaProductos = [
    new DetalleVenta(this.producto1),
    new DetalleVenta(this.producto2),
    new DetalleVenta(this.producto3),
  ]  
  


  public addCountProduct(id:number)
  {
    this.listaProductos.find((item) => item.idProducto !== id).cantidad++;
  }
  public removeCountProduct(id:number)
  {
    this.listaProductos.find((item) => item.idProducto !== id).cantidad--;
  }

  public salesProducts() {
    //El id de la seccion de usuario
    let idUsuario = 1;
    let venta = new Venta();
    let detalleVentas = [];
    //detalleVentas.push(new DetalleVenta())
    
  
     //this.service.createVenta()
  }


  productos = [
    this.producto1,
    this.producto2,
    this.producto3
  ]
  data = Object.values(this.productos)
  
  public getProducts(){
    var total = 0;
    this.data.forEach(element => {
      
      total = total + (element.cantidad * element.precio)
    });
    return total;
  }
  totalVenta = this.getProducts();
  
  
  public deleteOneProductList (id: number) {
    this.data = this.data.filter((item) => item.idProducto !== id)
    this.totalVenta = this.getProducts();
  }
  client1 : Cliente = {
    idCliente : 1,
    nitCi : '',
    nombre: '',
    apellidos: '',
    correo: ''
  }
  
  public RegisterClient(){
    const nombre = (document.getElementById('Nombre') as HTMLInputElement).value;
    const apellido = (document.getElementById('Apellido') as HTMLInputElement).value;
    const nit = (document.getElementById('NIT') as HTMLInputElement).value;
    const correo = (document.getElementById('Correo') as HTMLInputElement).value;
    this.client1.nombre = nombre;
    this.client1.apellidos = apellido;
    this.client1.nitCi = nit;
    this.client1.correo = correo;
    console.log(this.client1);
  };
  



}
