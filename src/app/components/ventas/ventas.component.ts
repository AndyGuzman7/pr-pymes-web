import { PRECONNECT_CHECK_BLOCKLIST } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { Cliente } from 'src/app/models/cliente';
import {LoadScriptsService} from 'src/app/load-scripts.service'
import { VentaService } from 'src/app/services/venta.service';
import {Venta} from 'src/app/models/venta'
import {Router} from '@angular/router';
import { DetalleVenta } from 'src/app/models/detalle-venta';
import { ClienteService } from 'src/app/services/cliente.service'

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ItemsList } from '@ng-select/ng-select/lib/items-list';
declare var js;
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})

export class VentasComponent implements OnInit {
  public titulo: string = 'Listado de ventas';
  cliente : Cliente = new Cliente();


  ventas: Venta[];
  constructor(private serviceVenta: VentaService, private serviceCliente: ClienteService, private _LoadScripts:LoadScriptsService , private router:Router) { 
    _LoadScripts.Load(["accordion"]);
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


  //Items para buscador de Objetos
  producto4 : Producto = {
    idProducto: 4,
    producto: 'Celular Iphone X',
    descripcion: 'Buena camara, Camara HD',
    cantidad: 4,
    precio: 2000,
    subtotal: 1
  }
  producto5 : Producto = {
    idProducto: 5,
    producto: 'Botellon de Agua Totto',
    descripcion: '1 Litro, Color Azul',
    cantidad: 2,
    precio: 70,
    subtotal: 1
  }
  producto6 : Producto = {
    idProducto: 6,
    producto: 'Gafas de Sol',
    descripcion: 'Color Negro',
    cantidad: 3,
    precio: 200,
    subtotal: 1
  }
  producto7 : Producto = {
    idProducto: 7,
    producto: 'Vaso de Vidrio',
    descripcion: 'Transparente',
    cantidad: 2,
    precio: 20,
    subtotal: 1
  }

  producto8 : Producto = {
    idProducto: 8,
    producto: 'Vaso de Vidrio',
    descripcion: 'Transparente',
    cantidad: 2,
    precio: 20,
    subtotal: 1
  }
//Buscador de Objetos
  listaProductosPorBuscador =[
    
  ]
  listaProductosBuscador = [
    new DetalleVenta(this.producto4),
    new DetalleVenta(this.producto5),
    new DetalleVenta(this.producto6),
    new DetalleVenta(this.producto7),
  ]


  listaProductos = [
    new DetalleVenta(this.producto1),
    new DetalleVenta(this.producto2),
    new DetalleVenta(this.producto3),
  ]  

  public selectOneProductList(detalleventa : DetalleVenta){
    this.listaProductosBuscador = this.listaProductosBuscador.filter((item) => item !== detalleventa)
    this.listaProductos.push(detalleventa)
    this.totalVenta = this.getProducts();

    

  }

  public addCountProduct(id:number)
  {
    let product = this.listaProductos.find((item) => item.producto.idProducto == id);
    product.addCantidad();
  }
  public removeCountProduct(id:number)
  {
    let product = this.listaProductos.find((item) => item.producto.idProducto == id);
    product.removeCantidad();
    
  }

  public salesProducts() {
    //El id de la seccion de usuario
    let idUsuario = 1;
    let venta = new Venta();
    let detalleVentas = [];
    //detalleVentas.push(new DetalleVenta())
    
  
     //this.service.createVenta()
  }
  

  public getProducts(){
    var total = 0;
    this.listaProductos.forEach(element => {
      
      total = total + (element.cantidad * element.producto.precio)
    }); 
    return total;
  }
  totalVenta = this.getProducts();
  
  public deleteOneProductList (id: number) {
    this.listaProductos = this.listaProductos.filter((item) => item.idProducto !== id)
    this.totalVenta = this.getProducts();
  }


  
  public RegisterClient(): void{
    const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
    const apellido = (document.getElementById('apellidos') as HTMLInputElement).value;
    const nit = (document.getElementById('nitCi') as HTMLInputElement).value;
    const correo = (document.getElementById('correo') as HTMLInputElement).value;
    let cliente2 = new Cliente();
    
    cliente2.nombre = nombre;
    cliente2.apellidos = apellido;
    cliente2.nitCi = nit;
    cliente2.correo = correo;
    console.log(cliente2.nombre)
    this.serviceCliente.createCliente(cliente2).subscribe(res => {
      console.log(res)
    })
  };
  

    myControl = new FormControl<string | User>('');
    options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
    filteredOptions: Observable<User[]>;
  
    ngOnInit() {
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => {
          const name = typeof value === 'string' ? value : value?.name;
          return name ? this._filter(name as string) : this.options.slice();
        }),
      );
    }
  
    displayFn(user: User): string {
      return user && user.name ? user.name : '';
    }
  
    private _filter(name: string): User[] {
      const filterValue = name.toLowerCase();
      //this.serviceCliente.
      return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
    }

}
export interface User {
  name: string;
}
