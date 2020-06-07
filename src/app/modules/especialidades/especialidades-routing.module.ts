import { RouterModule, Routes } from '@angular/router';

import { EspecialiadesListarComponent } from './especialiades-listar/especialiades-listar.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'listar', component: EspecialiadesListarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspecialidadesRoutingModule {}
