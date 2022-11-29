import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms'; 
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-combobox-editable',
  templateUrl: './combobox-editable.component.html',
  styleUrls: ['./combobox-editable.component.css']
})
export class ComboboxEditableComponent implements OnInit {
  
  myControl = new FormControl<string | Producto>('');
  options: Producto[] = [];
  filteredOptions: Observable<Producto[]>;

  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(user: Producto): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): Producto[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

}
