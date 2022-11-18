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

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
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
  angForm: FormGroup;


  ventas: Venta[];
  constructor(private serviceVenta: VentaService, private serviceCliente: ClienteService, private _LoadScripts:LoadScriptsService , private router:Router, private fb: FormBuilder) { 
    _LoadScripts.Load(["accordion"]);
    this.createForm();
  }
  
  
  createForm() {
    this.angForm = this.fb.group({
      nombre: ["", [Validators.required, ]],
      apellido: ["", [Validators.required, ]],
      nit: ["", [Validators.required, ]],
      correo: ["", [Validators.required, Validators.email]]
    });
  }


 
  

//Buscador de Objetos
  listaProductosPorBuscador =[
    
  ]
  listaProductosBuscador = [
  
  ]


  listaProductos = [
   
  ]  

  public selectOneProductList(detalleventa : DetalleVenta){
    this.listaProductosBuscador = this.listaProductosBuscador.filter((item) => item !== detalleventa)
    this.listaProductos.push(detalleventa)
    this.totalVenta = this.getProducts();

    

  }

  public addCountProduct(id:number)
  {
    let product = this.listaProductos.find((item) => item.producto.productID == id);
    product.addCantidad();
  }
  public removeCountProduct(id:number)
  {
    let product = this.listaProductos.find((item) => item.producto.productID == id);
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
    if(this.angForm.valid)
    {
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
    }
    else
    {
      console.log("no esta validado");
    }
   
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
