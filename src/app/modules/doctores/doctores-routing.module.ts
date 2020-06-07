import { RouterModule, Routes } from '@angular/router';

import { DoctorComponent } from './doctor/doctor.component';
import { DoctoresListarComponent } from './doctores-listar/doctores-listar.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'listar', component: DoctoresListarComponent },
  { path: 'form', component: DoctorComponent},
  { path: 'form/:id', component: DoctorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctoresRoutingModule { }
