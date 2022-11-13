import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';//Nota:si se desea gargar pocos datos es posible usar esta función de material angular que muestra en la tabla de a 5 filas
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Supplier } from 'src/app/models/supplier';
import { SupplierService } from 'src/app/services/supplier.service';
import Swal from 'sweetalert2';
/*Responsable:Valeria Delgadillo Datos estaticos, realizar clases y métodos según corresponda*/

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})

export class SupplierComponent implements OnInit {

  supplider: Supplier[];

  dataSource: MatTableDataSource<Supplier>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  pageSizeOptions: number[] = [5, 20];

  tabIndex = 0;

  displayedColumns: string[] = ['nombre', 'direccion', 'telefono', 'email', 'acciones'];


  constructor(private route: ActivatedRoute,
    private service: SupplierService) { }

  ngOnInit() {
    this.service.listar().subscribe(supplider => { 
      this.supplider = supplider; 
      this.iniciarPaginador(); 
    });

  }

  iniciarPaginador(): void {
    this.dataSource = new MatTableDataSource<Supplier>(this.supplider);
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Registros por página';
  }

  /*filtro para buscar proveedores por letra
  Agregar metodos si lo ven conveniente*/
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /*Agregar metodos para eliminar proveedores*/
  deleteSupplier(supplier: Supplier): void {

    Swal.fire({
      title: 'Cuidado:',
      text: `¿Seguro que desea eliminar a ${supplier.nombre} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      console.log("Eliminación Logica");
    });


  }
}
