import { PRECONNECT_CHECK_BLOCKLIST } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { Cliente } from 'src/app/models/cliente';
import {LoadScriptsService} from 'src/app/load-scripts.service'
import { VentaService } from 'src/app/services/venta.service';
import {Venta} from 'src/app/models/venta'
import {Router} from '@angular/router';
import { DetalleVenta } from 'src/app/models/detalle-venta';
import { ClienteService } from 'src/app/services/cliente.service';

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
declare var js;
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})

export class VentasComponent implements OnInit {
  public titulo: string = 'Listado de ventas';



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

  listaProductos = [
    new DetalleVenta(this.producto1),
    new DetalleVenta(this.producto2),
    new DetalleVenta(this.producto3),
  ]  
  


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

    this.serviceCliente.createCliente(this.client1).subscribe(res => {
      console.log(res)
    })
  };
  
/** this.service.selectVenta().subscribe(ventas =>{
      this.ventas = ventas;
    }) */
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
      console.log(name)
      return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
    }

}
export interface User {
  name: string;
}
