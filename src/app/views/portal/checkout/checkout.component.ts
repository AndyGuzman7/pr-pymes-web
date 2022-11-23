import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { DetalleVenta } from "../../../models/detalle-venta";
import { Venta } from "../../../models/venta";
import { Producto } from "../../../models/producto";
import { VentaService } from "src/app/services/venta.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public products : any = [];
  public product : Producto;
  public venta : Venta;
  public detalle_venta : DetalleVenta;
  public detalle_ventalist : DetalleVenta[] = [];
  public grandTotal !: number;
  public quantityTotal !: number;
  public first_name : any = sessionStorage.getItem('name');
  public last_name : any = sessionStorage.getItem('lname');
  public email : any = sessionStorage.getItem('email');
  public id_user : any = sessionStorage.getItem('id_user');
  constructor(private cartService : CartService, private router : Router, private ventaService : VentaService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
      this.quantityTotal = this.cartService.getTotalQuantity();
    })
  }

  checkoutGo(){
    
    //this.venta. =  this.products;
    this.products.map((p: any, index: any) => {
      this.product = new Producto();
      this.product.productID = p.productID,
      this.product.price = p.price,
      this.detalle_venta = new DetalleVenta(this.product);
      this.detalle_ventalist.push(this.detalle_venta);
    });
    this.venta = new Venta();
    this.venta.idUsuario = this.id_user;
    this.venta.Cliente.idCliente = this.id_user;
    this.venta.detallesVentas = this.detalle_ventalist;
    this.ventaService.createVenta(this.venta);

    console.log(this.venta.isOk());

    alert("Tu pedido se realizó con éxito");
    this.cartService.removeAllCart();
    this.router.navigate(['cart']);
  }

}
