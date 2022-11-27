import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { LibroDiario } from 'src/app/models/libro-diario';
import { LibroDiarioService } from 'src/app/services/libro-diario.service';

@Component({
  selector: 'app-librodiario',
  templateUrl: './libro-diario.component.html',
  styleUrls: ['./libro-diario.component.css']
})
export class LibrodiarioComponent implements OnInit {

  titulo = 'Lista de libros diarios';
  librodiarios: LibroDiario[];
  fechaInicio = 1;
  fechaFin = 1;
  totalRegistros = 0;
  totalporPagina = 5;
  paginaActual = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: LibroDiarioService) { }

  ngOnInit(): void 
  {
    this.calcular();
  }

  paginar(event: PageEvent): void
  {
    this.paginaActual=event.pageIndex;
    this.totalporPagina=event.pageSize;
    this.calcular();
  }

  private calcular()
  {
    this.service.listarPorPaginas(this.paginaActual.toString(),this.totalporPagina.toString())
    .subscribe(p => 
      {
        this.librodiarios = p.content as LibroDiario[];
        this.totalRegistros = p.totalElements as number;
        this.paginator._intl.itemsPerPageLabel="Registros por página";
      });
  }

  public filtrar(event: any)
  {
    var inicio = new Date(event.target.fechaInicio.value);
    var fin = new Date(event.target.fechaFin.value);
    var tipo = event.target.tipoLibro.value;

    inicio.setDate(inicio.getDate() + 1);
    this.service.mostrarPorFechas(inicio.toString(), fin.toString(), tipo).subscribe(librodiarios => { 
      this.librodiarios = librodiarios; 
      this.fechaInicio=1; 
      this.fechaFin=1; },
      err => {
        if(inicio.toString() == "Invalid Date"){
          this.fechaInicio = 0;
        }
        if(fin.toString() == "Invalid Date"){
          this.fechaFin = 0;
        }
      });
  }

}
