import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { PacienteComponent } from './paciente/paciente.component';
import { PacientesListarComponent } from './pacientes-listar/pacientes-listar.component';

const routes: Routes = [
  { path: 'listar', component: PacientesListarComponent},
  { path: 'form', component: PacienteComponent},
  { path: 'form/:id', component: PacienteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule { }
