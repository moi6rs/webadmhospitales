import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { EspecialidadService } from 'src/app/Services/especialidad.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.scss'],
})
export class EspecialidadComponent implements OnInit {
  especialidadForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EspecialidadComponent>,
    private especialidadService: EspecialidadService
  ) {
    this.crearEspecialidadForm();
  }

  ngOnInit() {}

  private crearEspecialidadForm() {
    this.especialidadForm = this.fb.group({
      id: [null],
      nombre: ['', [Validators.required]],
      descripcion: [''],
    });
  }
  cerrarDialog(): void {
    this.dialogRef.close();
  }
  crearEspecialidad(): void {
    this.especialidadService
      .crearEspecialidad(this.especialidadForm.value)
      .subscribe(
        (response) => {
          console.log('response: ', response);
          this.dialogRef.close(response);
        },
        (error) => {
          console.log('error: ', error);
          alert('No se pudo registrar el Especialidad intentelo de nuevo');
        }
      );
  }

  get nombre(): FormControl {
    return this.especialidadForm.get('nombre') as FormControl;
  }
  get descripcion(): FormControl {
    return this.especialidadForm.get('descripcion') as FormControl;
  }
}
