import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctoresRoutingModule } from './doctores-routing.module';
import { DoctoresListarComponent } from './doctores-listar/doctores-listar.component';
import { DoctorComponent } from './doctor/doctor.component';


@NgModule({
  declarations: [DoctoresListarComponent, DoctorComponent],
  imports: [
    CommonModule,
    DoctoresRoutingModule
  ]
})
export class DoctoresModule { }
