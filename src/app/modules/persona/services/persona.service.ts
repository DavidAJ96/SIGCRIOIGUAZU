import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/core/services/crud_service';
import {  Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService extends CrudService<Persona,number> {

  constructor(
    http: HttpClient,

  ) {
    super(http,'personas',Persona)
  }
}
