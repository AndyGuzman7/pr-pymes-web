import { Component, OnInit } from '@angular/core';
import { Budget } from 'src/app/models/budget';

import { ActivatedRoute, Router } from '@angular/router';
import { BudgetService } from 'src/app/services/budget.service';

import { CommonFormComponent } from '../../common-form.component';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-budget-sheet',
  templateUrl: './budget-sheet.component.html',
  styleUrls: ['./budget-sheet.component.css']
})

export class BudgetSheetComponent
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
      const idSupplier =+ params.get('idSupplier');
      const idBudget =+ params.get('idBudget');

      if(idBudget){
        this.service.ver(idBudget).subscribe(m => {
          this.model = m;
          this.serviceSupplier.ver(idSupplier).subscribe(x => {
            this.model.proveedor = x;
            this.model.idProveedor = x.id;
            this.model.id = idBudget;
            this.titulo = 'Editar ' + this.nombreModel;
          })
          console.log(this.model);
          
        })
        
      } else if (idSupplier) {
        this.serviceSupplier.ver(idSupplier).subscribe(x => {
          
          this.model.proveedor = x;
          this.model.idProveedor = x.id;
        })
      }
    })
  }

}
