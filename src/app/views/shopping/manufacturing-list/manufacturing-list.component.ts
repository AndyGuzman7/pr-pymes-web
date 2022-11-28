import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Manufactura } from 'src/app/models/manufactura';
import { Produccion } from 'src/app/models/produccion';
import { ProduccionService } from 'src/app/services/produccion.service';

/*Responsable:Valeria Delgadillo Datos estaticos, realizar clases y métodos según corresponda*/ 
export interface Manufacturing {
  date: string;
  quantity: number;
  product: string;  
}
@Component({
  selector: 'app-manufacturing-list',
  templateUrl: './manufacturing-list.component.html',
  styleUrls: ['./manufacturing-list.component.css']
})
export class ManufacturingListComponent implements OnInit {

  produccions: Produccion[];

  displayedColumns: string[] = ['ref_produccion','fecha_produccion','productoNombre','cantidad','acciones'];
  
  dataSource: MatTableDataSource<Produccion>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  pageSizeOptions: number[] = [6, 20];

  tabIndex = 0;
  
  constructor(private service: ProduccionService) {
    this.produccions = [];
  }

  ngOnInit(): void {
    this.service.getProduccionManufactura().subscribe(produccion => {

      produccion.forEach(element => {
        this.produccions.push(new Produccion(element[0],element[1],element[2],element[3],element[4], new Manufactura(element[5],element[6],element[7], null)))
      });

      this.service.getProducts().subscribe(product => {
        let productionManufacture = this.produccions.map(orden => {
          return{
            productoNombre: product.find(x => x.productID == orden.manufacturas.id_producto).name,
            id:orden.id,
            nombre:orden.nombre,
            estado:orden.estado,
            fecha_produccion:orden.fecha_produccion,
            ref_produccion:orden.ref_produccion,
            update_date:orden.update_date,
            manufacturas:orden.manufacturas
          }
        })

        this.dataSource = new MatTableDataSource<Produccion>(productionManufacture);
      })
    });
  }

  iniciarPaginador(): void {
    this.dataSource = new MatTableDataSource<Produccion>(this.produccions);
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Registros por página';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
