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
        data:'curso'
      },
      {
        title:'Division',
        data:'division'
      },
      {
        title:'Orientacion',
        data:'nombre_orientacion'
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
