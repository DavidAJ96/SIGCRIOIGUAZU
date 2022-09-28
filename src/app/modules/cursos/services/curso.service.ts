import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/core/services/crud_service';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService extends CrudService<Curso,number> {

  constructor(http: HttpClient) {
    super(http,'cursos',Curso);
    this.setFilter('orderby','anio_escolar.anio')
  }

  sort(cursos: Curso[]){
    return cursos.sort((cursoAnt,CursoSig)=>{
      if(cursoAnt.CursoDivision < CursoSig.CursoDivision){
        return -1;
      }
      else if(cursoAnt.CursoDivision  > CursoSig.CursoDivision){
        return 1;
      }
      else{
        return 0;
      }
  });

  }

}
