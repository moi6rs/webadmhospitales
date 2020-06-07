import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctoresListarComponent } from './doctores-listar/doctores-listar.component';
import { DoctoresRoutingModule } from './doctores-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [DoctoresListarComponent, DoctorComponent],
  imports: [
    CommonModule,
    DoctoresRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DoctoresModule { }
