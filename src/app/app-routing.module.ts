import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'especialidades',
    loadChildren: () =>
      import('./modules/especialidades/especialidades.module').then(
        (m) => m.EspecialidadesModule
      ),
  },
  {
    path: 'pacientes',
    loadChildren: () =>
      import('./modules/pacientes/pacientes.module').then(
        (m) => m.PacientesModule
      ),
  },
  {
    path: 'doctores',
    loadChildren: () =>
      import('./modules/doctores/doctores.module').then(
        (m) => m.DoctoresModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
