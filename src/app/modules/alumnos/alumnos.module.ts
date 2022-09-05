import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosComponent } from './alumnos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FiltroCursoModule } from '../cursos/components/filtro-curso/filtro-curso.module';


@NgModule({
  declarations: [AlumnosComponent],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    SharedModule,
    FiltroCursoModule
  ]
})
export class AlumnosModule { }
