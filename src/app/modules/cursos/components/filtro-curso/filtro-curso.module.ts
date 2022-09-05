import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroCursoComponent } from './filtro-curso.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [FiltroCursoComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[ FiltroCursoComponent]
})
export class FiltroCursoModule { }
