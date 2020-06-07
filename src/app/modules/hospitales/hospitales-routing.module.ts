import { RouterModule, Routes } from '@angular/router';

import { HospitalComponent } from './hospital/hospital.component';
import { HospitalesListarComponent } from './hospitales-listar/hospitales-listar.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'listar', component: HospitalesListarComponent },
  { path: 'form', component: HospitalComponent },
  { path: 'form/:id', component: HospitalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalesRoutingModule { }
