 import { Component, OnInit,AfterViewInit } from '@angular/core';
import { GenericListPage } from 'src/app/core/common/GenericListPage';
import { Alumno } from './models/Alumno';
 import { AlumnoService } from './services/alumno.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent extends GenericListPage<Alumno,number> {


  constructor(alumnoService: AlumnoService) {
    super(alumnoService)
  }

  SetColumns(): void {
     this.columns = [
      {
        title:'documento',
        data:'perfil.documento'
      },
      {
        title:'Apellido y Nombre',
        data:'perfil.ApellidoNombre'
      },
      {
        title:'domicilio',
        data:'perfil.domicilio',
        orderable:false
      },
      {
        title:'Localidad',
        data:'perfil.localidad.localidad',
        orderable:false
      },
      {
        title:'Teléfono',
        data:'perfil.telefono',
        orderable:false
      },
      {
        title:'Estado',
        data:'estado'
      },
     ]
  }

  ngOnInit(): void {
    super.ngOnInit();
  }



}
