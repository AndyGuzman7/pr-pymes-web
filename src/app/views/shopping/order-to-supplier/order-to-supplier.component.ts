import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { Produccion } from 'src/app/models/produccion';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-order-to-supplier',
  templateUrl: './order-to-supplier.component.html',
  styleUrls: ['./order-to-supplier.component.css']
})


export class OrderToSupplierComponent implements OnInit {

  selectedProduct: string;
  productList:Produccion[] = [];
  produccionAux: Produccion;

  //ComboBox
  products: Producto[];
  service: ProductoService;

  myControl = new FormControl<string | Producto>('');
  options: Producto[] = [];
  filteredOptions: Observable<Producto[]>;
  //Fin combobox

  constructor(service: ProductoService) { 
    this.service=service
  }

  ngOnInit() {
    //Combobox
    this.service.getProductsForPedido().subscribe(p => {
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

  addList(produccionAux) {
    this.productList.push(produccionAux)
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
