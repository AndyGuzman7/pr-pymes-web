import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/services/supplier.service';
import { CommonFormComponent } from '../../common-form.component';

@Component({
  selector: 'app-supplier-registration',
  templateUrl: './supplier-registration.component.html',
  styleUrls: ['./supplier-registration.component.css']
})
export class SupplierRegistrationComponent
extends CommonFormComponent<Supplier, SupplierService> implements OnInit {
  supplider: Supplier;

  constructor(service: SupplierService,
    router: Router,
    route: ActivatedRoute) {
      super(service, router, route);
      this.titulo = 'Registrar Proveedor';
      this.model = new Supplier();
      this.nombreModel = Supplier.name;
      this.redirect = '/suppliers';
  }

  override ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id: number =+ params.get('id');
      if(id){
        this.service.ver(id).subscribe(m => {
          this.model = m;
          this.titulo = 'Editar ' + this.nombreModel;
        })
      }
    })
  }

}
