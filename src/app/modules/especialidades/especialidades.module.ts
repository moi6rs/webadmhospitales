import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { EspecialiadesListarComponent } from './especialiades-listar/especialiades-listar.component';
import { EspecialidadesRoutingModule } from './especialidades-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [EspecialiadesListarComponent],
  imports: [
    CommonModule,
    EspecialidadesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EspecialidadesModule { }
