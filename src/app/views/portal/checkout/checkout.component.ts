import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router, TitleStrategy } from '@angular/router';
import { DetalleVenta } from "../../../models/detalle-venta";
import { Venta } from "../../../models/venta";
import { Productoportal } from "../../../models/productportal";
import { Producto } from "../../../models/producto";
import { Cliente } from "../../../models/cliente";
import { VentaService } from "src/app/services/venta.service";
import { ProductService } from "src/app/services/product.service";
import { ClienteService } from "src/app/services/cliente.service";
import { finalize } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public products : any = [];
  public productsGet : Producto[] = [];
  public idNextVenta;
  public product : Producto;
  public productGet : Productoportal;
  public venta : Venta;
  public detalle_venta : DetalleVenta;
  public detalle_ventalist : DetalleVenta[] = [];
  public ventas : Venta[] = [];
  public grandTotal : number = 0;
  public clientes : Cliente[] = [];
  public cliente : Cliente;
  public quantityTotal !: number;
  public first_name : any = sessionStorage.getItem('name');
  public last_name : any = sessionStorage.getItem('lname');
  public email : any = sessionStorage.getItem('email');
  public id_user : any = sessionStorage.getItem('id_user');
  public id_ver_pedido : any = sessionStorage.getItem('idVerPedido');
  public buttonText :string = "";
  constructor(private productService : ProductService, private cartService : CartService, private clienteService : ClienteService, private router : Router, private ventaService : VentaService) { }

  ngOnInit(): void {
    if(this.id_ver_pedido==''||this.id_ver_pedido==null){
      this.buttonText = 'Finalizar Compra';
      this.cartService.getProducts()
      .subscribe(res=>{
        this.products = res;
        this.grandTotal = this.cartService.getTotalPrice();
        this.quantityTotal = this.cartService.getTotalQuantity();
      })
    }else{
      this.productService.selectClient()
      .subscribe(res=>{
        this.productsGet = res;
        this.getNameProduct();
      })

      
    }
    
  }

  getNameProduct() {
    this.buttonText = 'Volver';
      this.ventaService.selectVentaID(this.id_ver_pedido).subscribe(res=>{
        this.venta = res;
        for (let index = 0; index < this.venta.detallesVentas.length; index++) {
          this.productGet = new Productoportal();
          this.productGet.price = this.venta.detallesVentas[index].precioVenta;
          this.productGet.quantitycart = this.venta.detallesVentas[index].cantidad;
          for (let i = 0; i < this.productsGet.length; i++) {
            if(this.productsGet[i].productID == this.venta.detallesVentas[index].idProducto){
              this.productGet.name = this.productsGet[i].name;
            }
          }
          this.productGet.total = this.venta.detallesVentas[index].subTotal;
          this.products.push(this.productGet);
          
          this.grandTotal+=this.venta.detallesVentas[index].subTotal;
        }
      })
  }

  ngOnDestroy(){
    sessionStorage.setItem('idVerPedido', '');
  }

  checkoutGo(){
    if(this.buttonText=='Finalizar Compra'){
      for (let index = 0; index < this.products.length; index++) {
        this.product = new Producto();
        this.product.productID = this.products[index].productID;
        this.product.price = this.products[index].price;
        this.detalle_venta = new DetalleVenta(this.product);
        this.detalle_venta.cantidad = this.products[index].quantitycart;
        this.detalle_venta.subTotal = this.products[index].total;
        this.detalle_ventalist.push(this.detalle_venta);
      }
  
      this.clienteService.selectClient().subscribe(res=>{
        this.clientes = res;
        for (let i = 0; i < this.clientes.length; i++) {
          if(this.email==this.clientes[i].correo){
            this.cliente = new Cliente();
            this.cliente = this.clientes[i];
            this.checkoutGoVenta(this.cliente, this.detalle_ventalist);
          }
        } 
      });
    }else{
      this.router.navigate(['history']);
    }
    
  }

//
  getIdNextVenta(){
    this.ventaService.selectVenta().subscribe(res=>{
      this.ventas = res;
      for (let index = 0; index < this.ventas.length; index++) {
        this.idNextVenta = this.ventas[index].idVenta;
      }
      return this.idNextVenta;
    });
  }

  checkoutGoVenta(cliente : Cliente, detalle_ventas : DetalleVenta[]){
    this.venta = new Venta();
    this.venta.idUsuario = 0;
    this.venta.Cliente = cliente;
    for (let index = 0; index < detalle_ventas.length; index++) {
      this.venta.addDetallesVentas(detalle_ventas[index]);
    }

    this.venta.status = 1;
    this.venta.total = this.grandTotal;
    this.ventaService.createVenta(this.venta).subscribe(res=>{
      alert("Tu pedido se realizó con éxito");
      this.cartService.removeAllCart();
      this.router.navigate(['cart']);
    });
  }

}
