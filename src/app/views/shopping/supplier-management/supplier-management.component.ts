import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Butget } from 'src/app/models/butget';
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier-management',
  templateUrl: './supplier-management.component.html',
  styleUrls: ['./supplier-management.component.css']
})
export class SupplierManagementComponent implements OnInit {


  products = [
    {
      title: 'Product 1',
      code: '0123',
      unit_price: '15',
      iva: '0',
      warehouse: 'Almacen 1',
      category: 'Category'
    }
  ];

  supplider: Supplier;
  budgets: Butget[];

  model: Supplier;
  route: ActivatedRoute;
  service: SupplierService;
  
  constructor(service: SupplierService, 
    router: Router, 
    route: ActivatedRoute) {
      this.model = new Supplier();
      this.route = route;
      this.service = service;
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
      }
    })
    
  }

}
