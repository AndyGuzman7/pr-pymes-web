import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit, ViewChild  } from '@angular/core';
import { Budget } from 'src/app/models/budget';
import { BudgetService } from 'src/app/services/budget.service';
import { MatPaginator } from '@angular/material/paginator';//Nota:si se desea gargar pocos datos es posible usar esta función de material angular que muestra en la tabla de a 5 filas
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})

export class BudgetListComponent implements OnInit {
  budgets: Budget[];

  dataSource: MatTableDataSource<Budget>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  pageSizeOptions: number[] = [5, 20];

  tabIndex = 0;

  displayedColumns: string[] = [
        "refPresupuesto",
        "proveedor",
        "baseImponible",
        "descuentos",
        "fechaInicio",
        "presupuestoActual",
        "estado"
  ];

  constructor(private service: BudgetService) { }

  ngOnInit() {
    this.service.joinPresupuestoProveedorAll().subscribe(budget => {
      this.budgets = budget;
      this.iniciarPaginador(); 
    })
  }

  
  iniciarPaginador(): void {
    this.dataSource = new MatTableDataSource<Budget>(this.budgets);
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Registros por página';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
