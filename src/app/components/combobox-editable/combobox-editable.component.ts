import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms'; 
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-combobox-editable',
  templateUrl: './combobox-editable.component.html',
  styleUrls: ['./combobox-editable.component.css']
})
export class ComboboxEditableComponent implements OnInit {
  products: Producto[];
  service: ProductoService;

  myControl = new FormControl<string | Producto>('');
  options: Producto[] = [];
  filteredOptions: Observable<Producto[]>;

  constructor(service: ProductoService) {
    this.service=service
   }

  ngOnInit() {
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
    
  }

  displayFn(user: Producto): string {
    if (!user) return '';
    return user.name;
  }

  private _filter(name: string): Producto[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

}
