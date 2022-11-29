import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { Manufactura, ManufacturaConst } from 'src/app/models/manufactura';
import { Produccion, ProduccionConst } from 'src/app/models/produccion';
import { Production } from 'src/app/models/production';
import { Producto } from 'src/app/models/producto';
import { ProduccionService } from 'src/app/services/produccion.service';
import { ProductionService } from 'src/app/services/production.service';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';
import { CommonFormComponent } from '../../common-form.component';

@Component({
  selector: 'app-manufacturing-production-registration',
  templateUrl: './manufacturing-production-registration.component.html',
  styleUrls: ['./manufacturing-production-registration.component.css']
})
export class ManufacturingProductionRegistrationComponent
extends CommonFormComponent<ProduccionConst, ProductionService> 
implements OnInit {

  selectedProduct: string;
  manufacturas: ManufacturaConst[] = [];
  manufactura: ManufacturaConst;
  produccion: ProduccionConst;
  product: Producto;
  //ComboBox
  products: Producto[];
  serviceProducto: ProductoService;

  myControl = new FormControl<Producto | Producto>(new Producto());
  options: Producto[] = [];
  filteredOptions: Observable<Producto[]>;
  //Fin combobox
  
  constructor(service: ProductionService,router: Router,
    route: ActivatedRoute, serviceProducto: ProductoService) { 
    super(service, router, route);
    this.titulo = 'Registrar Proveedor';
    this.redirect = '/manufacturing';
    this.model = new ProduccionConst();
    this.manufactura = new ManufacturaConst();
    this.serviceProducto = serviceProducto;
    }

  override ngOnInit() {
    //Combobox
    this.serviceProducto.getProducts().subscribe(p => {
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
    this.model.manufactura = this.manufacturas;
    this.service.crear(this.model).subscribe(m => {
      this.service.addManufacturas(this.manufacturas, m.idProduccion).subscribe(x => {
        console.log(m);
        console.log(x);
        Swal.fire('Nuevo:', ` creado con éxito`, 'success');
        this.router.navigate([this.redirect]);
      })
      
    }, err => {
      if(err.status === 400){
        this.error = err.error;
        console.log(this.error);
      }
    });
   
  }

  guardar(){
    let p: Producto;
    p = this.myControl.value;
    
    this.manufactura.producto = p.productID;
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
