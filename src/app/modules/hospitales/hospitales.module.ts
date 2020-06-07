import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { HospitalComponent } from './hospital/hospital.component';
import { HospitalesListarComponent } from './hospitales-listar/hospitales-listar.component';
import { HospitalesRoutingModule } from './hospitales-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HospitalesListarComponent, HospitalComponent],
  imports: [
    CommonModule,
    HospitalesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HospitalesModule { }
