import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { Manufactura, ManufacturaConst } from 'src/app/models/manufactura';
import { Produccion, ProduccionConst } from 'src/app/models/produccion';
import { Producto } from 'src/app/models/producto';
import { ProduccionService } from 'src/app/services/produccion.service';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';
import { CommonFormComponent } from '../../common-form.component';

@Component({
  selector: 'app-manufacturing-production-registration',
  templateUrl: './manufacturing-production-registration.component.html',
  styleUrls: ['./manufacturing-production-registration.component.css']
})
export class ManufacturingProductionRegistrationComponent
extends CommonFormComponent<ProduccionConst, ProduccionService> implements OnInit {

  selectedProduct: string;
  manufacturas: ManufacturaConst[] = [];
  manufactura: ManufacturaConst;
  produccion: ProduccionConst;

  //ComboBox
  products: Producto[];
  serviceProducto: ProductoService;

  myControl = new FormControl<Producto | Producto>(new Producto());
  options: Producto[] = [];
  filteredOptions: Observable<Producto[]>;
  //Fin combobox
  
  constructor(service: ProduccionService,router: Router,
    route: ActivatedRoute, serviceProducto: ProductoService) { 
    super(service, router, route);
    this.titulo = 'Registrar Proveedor';
    this.redirect = '/suppliers';
    this.model = this.produccion;
    this.manufactura = new ManufacturaConst();
    this.produccion = new ProduccionConst();
    }

  override ngOnInit() {
    //Combobox
    this.service.getProducts().subscribe(p => {
      this.options = p;
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => {
          const name = typeof value === 'string' ? value : value?.name;
          return name ? this._filter(name as string) : this.options.slice();
        }),
      );
    })
   //ComboBox

  }

  public crearTransaccion(): void {
    this.crear();
    
  }

  guardar(){
    let p: Producto;
    p = this.myControl.value;
    this.manufactura.id_producto = p.productID;
    this.manufactura.nombreProducto = p.name;
    this.manufacturas.push(this.manufactura);
    this.manufactura = new ManufacturaConst();
  }

  //Metodos Combobox
  displayFn(user: Producto): string {
    if (!user) return '';
    return user.name;
  }

  private _filter(name: string): Producto[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
