import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';

@NgModule({
  declarations: [UsuarioLoginComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
})
export class UsuariosModule {}
