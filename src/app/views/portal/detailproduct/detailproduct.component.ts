import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ProductsComponent } from 'src/app/views/portal/products/products.component';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.scss']
})
export class DetailproductComponent implements OnInit {

  public detailList: any;
  public filterCategory: any;
  public product: any;
  constructor(private api: ApiService, private cartService: CartService, private productService: ProductService, private router : Router) { }

  ngOnInit(): void {
    this.productService.selectClient()
      .subscribe(res => {
        this.detailList = res;
        this.filterCategory = res;
        this.detailList.map((a: any, index: any) => {
          if (a.productID == sessionStorage.getItem('detailid')) {
            this.product = a;

          }
          Object.assign(a, { quantitycart: 1, total: a.price });
        });
      });

  }

  addtocart(item: any) {
    this.cartService.addtoCart(item);
    alert("Producto añadido al carrito");
    this.router.navigate(['products']);
  }

  backClose(){
    this.router.navigate(['products']);
  }

}
