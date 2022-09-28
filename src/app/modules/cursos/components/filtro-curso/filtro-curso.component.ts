import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Curso } from '../../models/curso';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'box-filtro-curso',
  templateUrl: './filtro-curso.component.html',
  styleUrls: ['./filtro-curso.component.css'],
  providers:[CursoService]
})
export class FiltroCursoComponent implements OnInit {
  @Output() onChange = new EventEmitter<number>()
  cursos: Curso[] = [];
  isLoading: Boolean = false;
  constructor(
    private servicio: CursoService
  ) { }

  ngOnInit(): void {
    this.servicio.paginator.per_page = 9999999999;
    this.servicio.setFilter('estado','activo')
    this.isLoading = true;
    this.servicio.findAll().subscribe(cursos=>{
      this.cursos = this.servicio.sort(cursos);
    })
  }

  onFilter(value){

    this.onChange.emit(value)
  }

}
