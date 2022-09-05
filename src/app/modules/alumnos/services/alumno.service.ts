import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/core/services/crud_service';
import { Alumno } from '../models/Alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService extends CrudService<Alumno,number> {

  constructor( http: HttpClient) {
    super(http,'alumnos',Alumno)
   }

}
