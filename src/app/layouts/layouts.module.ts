import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { MaterialModule } from '../material.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DefaultComponent],
  imports: [CommonModule, MaterialModule, RouterModule, SharedModule],
})
export class LayoutsModule {}
