import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Budget } from 'src/app/models/budget';
import { Producto } from 'src/app/models/producto';
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier-management',
  templateUrl: './supplier-management.component.html',
  styleUrls: ['./supplier-management.component.css']
})
export class SupplierManagementComponent implements OnInit {

  supplider: Supplier;
  budgets: Budget[];
  products: Producto[];

  model: Supplier;
  route: ActivatedRoute;
  service: SupplierService;
  
  constructor(service: SupplierService, 
    router: Router, 
    route: ActivatedRoute) {
      this.model = new Supplier();
      this.route = route;
      this.service = service;
      this.products = [];
    }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      const id: number =+ params.get('id');
      if(id){
        this.service.ver(id).subscribe(m => {
          this.model = m;
        })

        this.service.filtrarPresupuestoProveedor(id).subscribe(c => {
          this.budgets = c;
        })

        this.service.getProducts().subscribe(product => {
          let productionManufacture = product.map(p => {
            if(p.supplier == id){
              this.products.push(p)
            }
          })
        })

      }
    })
    
  }

}
