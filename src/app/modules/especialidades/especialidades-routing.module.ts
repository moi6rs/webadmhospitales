import { RouterModule, Routes } from '@angular/router';

import { EspecialiadesListarComponent } from './especialiades-listar/especialiades-listar.component';
import { EspecialidadComponent } from './especialidad/especialidad.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'listar', component: EspecialiadesListarComponent },
  { path: 'form', component: EspecialidadComponent },
  { path: 'form/:id', component: EspecialidadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspecialidadesRoutingModule {}
