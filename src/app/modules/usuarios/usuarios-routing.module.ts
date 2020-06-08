import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';

const routes: Routes = [
  {
    path: 'login',
    component: UsuarioLoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
