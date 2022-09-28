import { Component, OnInit } from '@angular/core';
import { GenericListPage } from 'src/app/core/common/GenericListPage';
import { Curso } from './models/curso';
import { CursoService } from './services/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent  extends GenericListPage<Curso,number>{
  SetColumns(): void {
    this.columns = [
      {
        title:'Curso',
        data:'anio_escolar.anio',
        className:'col-md-2 text-center'
      },
      {
        title:'Division',
        data:'division',
        className:'col-md-2 text-center'
      },
      {
        title:'Orientacion',
        data:'anio_escolar.plan_estudio.nombre_plan',
        className:'col-md-4 '
      },
      {
        title:'Estado',
        data:'estado'
      }
    ]
  }

  constructor(servicio: CursoService) {
    super(servicio)
   }

  ngOnInit(): void {
    super.ngOnInit()
  }

}
