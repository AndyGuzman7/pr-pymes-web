import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
/*export interface Orders {
  referencia: string;
  proveedor: string;
  solicitante: string;
  fechaPedido: string;
  fechaLlegada: string;
  baseImponible: string;
  estado: string;
  facturado:string;
}
const ELEMENT_DATA: Orders[] = [
  //{referencia: 'Compra 45', proveedor: 'Kriss', solicitante: 'Juan Perez',  fechaPedido:'10-11-2020', fechaLlegada:'15-12-2020', baseImponible:'15', estado:'entregado', facturado:'Si'},

];
*/

@Component({
  selector: 'app-orders-to-supplier',
  templateUrl: './orders-to-supplier.component.html',
  styleUrls: ['./orders-to-supplier.component.css']
})
export class OrdersToSupplierComponent implements OnInit {
  dataSource: MatTableDataSource<Pedido>;

  displayedColumns: string[] = ['referencia','proveedor','fechaPedido','fechaLlegada', 'baseImponible','estado','acciones'];
  
  pedido: Pedido[];

  constructor(private route: ActivatedRoute,
    private service: PedidoService) { }

  ngOnInit() {
    this.service.listadoPedidos().forEach(pedidos => {
      this.pedido = pedidos
      this.iniciarPaginador(); 
      console.log(this.pedido);
    });
    console.log("error");
  }

  iniciarPaginador(): void {
    this.dataSource = new MatTableDataSource<Pedido>(this.pedido);
   // this.dataSource.paginator = this.paginator;
    //this.paginator._intl.itemsPerPageLabel = 'Registros por página';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
