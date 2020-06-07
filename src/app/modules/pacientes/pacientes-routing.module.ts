import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { PacientesListarComponent } from './pacientes-listar/pacientes-listar.component';

const routes: Routes = [
  { path: 'listar', component: PacientesListarComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule { }
