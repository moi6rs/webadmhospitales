import { RouterModule, Routes } from '@angular/router';

import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './shared/home/home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'home', component: HomeComponent
      },
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
      {
        path: 'hospitales',
        loadChildren: () =>
          import('./modules/hospitales/hospitales.module').then(
            (m) => m.HospitalesModule
          ),
      },
      {
        path: 'usuarios',
        loadChildren: () =>
          import('./modules/usuarios/usuarios.module').then(
            (m) => m.UsuariosModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
