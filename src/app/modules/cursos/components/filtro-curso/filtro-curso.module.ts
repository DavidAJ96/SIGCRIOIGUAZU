import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroCursoComponent } from './filtro-curso.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FiltroCursoComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[ FiltroCursoComponent]
})
export class FiltroCursoModule { }
