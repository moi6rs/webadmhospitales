import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';
import { PacientesListarComponent } from './pacientes-listar/pacientes-listar.component';
import { PacientesRoutingModule } from './pacientes-routing.module';
import { PacienteComponent } from './paciente/paciente.component';

@NgModule({
  declarations: [PacientesListarComponent, PacienteComponent],
  imports: [
    CommonModule,
    PacientesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PacientesModule { }
