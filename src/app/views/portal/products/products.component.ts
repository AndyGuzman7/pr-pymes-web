import { Component, OnInit } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList: any;
  public filterCategory: any
  searchKey: string = "";
  constructor(private api: ApiService, private cartService: CartService, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.selectClient()
      .subscribe(res => {
        this.productList = res;
        this.filterCategory = res;
        this.productList.forEach((a: any) => {
          //if (a.category === "women's clothing" || a.category === "men's clothing") {//revisar
          //  a.category = "fashion"
          //}
          Object.assign(a, { quantitycart: 1, total: a.price });
        });
        console.log(this.productList)
      });

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    })
  }
  addtocart(item: any) {
    this.cartService.addtoCart(item);
    alert("Producto añadido al carrito");
  }
  filter(category: string) {
    this.filterCategory = this.productList
      .filter((a: any) => {
        if (a.category == category || category == '') {
          return a;
        }
      })
  }
  openDetailproduct(id: any) {
    //this.detailcomponent(id);

    sessionStorage.setItem('detailid', id);
    this.router.navigate(['detailproduct']);
  }
}

