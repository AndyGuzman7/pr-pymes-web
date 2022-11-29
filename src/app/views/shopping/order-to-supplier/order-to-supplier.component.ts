import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { Budget } from 'src/app/models/budget';
import { DetallePedido } from 'src/app/models/detalle-pedido';
import { Pedido } from 'src/app/models/pedido';
import { Produccion } from 'src/app/models/produccion';
import { Producto } from 'src/app/models/producto';
import { Supplier } from 'src/app/models/supplier';
import { BudgetService } from 'src/app/services/budget.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { ProductoService } from 'src/app/services/producto.service';
import { SupplierService } from 'src/app/services/supplier.service';
import Swal from 'sweetalert2';
import { CommonFormComponent } from '../../common-form.component';

@Component({
  selector: 'app-order-to-supplier',
  templateUrl: './order-to-supplier.component.html',
  styleUrls: ['./order-to-supplier.component.css']
})


export class OrderToSupplierComponent 
extends CommonFormComponent<Pedido, PedidoService>
implements OnInit {

  selectedProduct: string;
  detallePedidos:DetallePedido[] = [];
  detallePedido: DetallePedido;

  //ComboBox
  products: Producto[];
  serviceProducto: ProductoService;

  myControl = new FormControl<Producto | Producto>(new Producto());
  options: Producto[] = [];
  filteredOptions: Observable<Producto[]>;
  //Fin combobox

  serviceBudget: BudgetService;
  serviceSupplier: SupplierService;
  budget:Budget;
  supplier:Supplier;

  constructor(service: PedidoService, 
    serviceBudget: BudgetService, 
    serviceProducto:ProductoService,
    serviceSuplier: SupplierService,
    router: Router,
    route: ActivatedRoute) { 
    super(service, router, route);
    this.detallePedido = new DetallePedido()
    this.serviceBudget = serviceBudget;
    this.serviceProducto =serviceProducto;
    this.serviceSupplier = serviceSuplier;
    this.titulo = 'Crear presupuesto';
    this.model = new Pedido();
    this.nombreModel = Pedido.name;
    this.redirect = '/pedidos';
  }

  override ngOnInit() {
    //Combobox
    this.serviceProducto.getProductsForPedido().subscribe(p => {
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

    this.route.paramMap.subscribe( params => {
      const idBudget =+ params.get('idBudget');
      if (idBudget) {
        this.serviceBudget.ver(idBudget).subscribe(x => {
          this.budget = x;
          this.model.presupuesto = x
          this.model.idpresupuesto = x.idPresupuesto
          this.serviceSupplier.ver(x.proveedor.idProveedor).subscribe(s => {
            this.supplier = s;
          })
        })
      }
      
    })
  }

 /* postPedidoDetallePedidos(){
    
    console.log(this.model)
    //this.crear();
  }***/

  public postPedidoDetallePedidos(): void {
    this.model.detalles_pedidos = this.detallePedidos;
    this.service.crear(this.model).subscribe(m => {
      this.service.insertManufacturas(this.detallePedidos, m.idPedido).subscribe(x => {
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
    console.log(p);
    
    this.detallePedido.idProducto = p.productID;
    this.detallePedido.nombre = p.name;
    this.detallePedidos.push(this.detallePedido);
    this.detallePedido = new DetallePedido();
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
