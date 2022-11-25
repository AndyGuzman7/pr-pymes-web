import { Component, OnInit } from '@angular/core';
import { Budget } from 'src/app/models/budget';

import { ActivatedRoute, Router } from '@angular/router';
import { BudgetService } from 'src/app/services/budget.service';

import { CommonFormComponent } from '../../common-form.component';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-budget-sheet-view',
  templateUrl: './budget-sheet-view.component.html',
  styleUrls: ['./budget-sheet-view.component.css']
})

export class BudgetSheetViewComponent
extends CommonFormComponent<Budget, BudgetService>
implements OnInit {

  products = [
    {
      description: 'Product 1',
      unit_price: '15',
      quantity: '10',
      discount: '0',
      taxable_income: '0'
    }
  ];

  serviceSupplier: SupplierService;

  constructor(service: BudgetService, serviceSupplier: SupplierService,
    router: Router,
    route: ActivatedRoute) {
      super(service, router, route);
      this.titulo = 'Crear presupuesto';
      this.model = new Budget();
      this.nombreModel = Budget.name;
      this.redirect = '/budgets';
      this.serviceSupplier = serviceSupplier;
  }

  override ngOnInit() {
    this.route.paramMap.subscribe( params => {
      const idBudget =+ params.get('idBudget');
      if (idBudget) {
        this.service.ver(idBudget).subscribe(x => {
          
          this.model = x;
          console.log(this.model.proveedor.idProveedor)
          this.serviceSupplier.ver(this.model.proveedor.idProveedor).subscribe(s => {
            this.model.refProveedor = s.nombre;
          })
        })
      }
    })
  }

}

