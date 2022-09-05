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
  }
}
