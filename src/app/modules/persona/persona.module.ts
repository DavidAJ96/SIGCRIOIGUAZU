import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonaComponent } from './persona.component';
import { FormPersonaComponent } from './components/form-persona/form-persona.component';



@NgModule({
  declarations: [PersonaComponent,FormPersonaComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule

  ],
  exports:[FormPersonaComponent]
})
export class PersonaModule { }
