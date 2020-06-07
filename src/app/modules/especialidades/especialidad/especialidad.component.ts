import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Especialidad } from 'src/app/models/especialidad.model';
import { EspecialidadService } from 'src/app/Services/especialidad.service';

@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.scss'],
})
export class EspecialidadComponent implements OnInit {
  especialidadForm: FormGroup;
  titulo: string;
  constructor(
    private fb: FormBuilder,
    private service: EspecialidadService,
    protected route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.crearEspecialidadForm();
    this.route.paramMap.subscribe((params) => {
      const id: number = +params.get('id');
      if (id) {
        this.service.ver(id).subscribe((p) => {
          this.setValueForm(p);
          console.log(p);
        });
      } else {
        this.titulo = 'Crear';
      }
    });
  }

  private setValueForm(especialidad: Especialidad): void {
    this.id.setValue(especialidad.id);
    this.nombre.setValue(especialidad.nombre);
    this.descripcion.setValue(especialidad.descripcion);
    this.titulo = 'Editar';
  }

  private crearEspecialidadForm() {
    this.especialidadForm = this.fb.group({
      id: [null],
      nombre: ['', [Validators.required]],
      descripcion: [''],
    });
  }
  crearEspecialidad(value): void {
    if (this.id.value === null) {
      this.service.crear(value).subscribe(
        (response) => {
          this.router.navigate(['/especialidades/listar']);
        },
        (error) => {
          console.log('error: ', error);
          alert('No se pudo Actualizar el Especialidad intentelo de nuevo');
        }
      );
    } else {
      this.service.actualizar(value).subscribe(
        (response) => {
          this.router.navigate(['/especialidades/listar']);
        },
        (error) => {
          console.log('error: ', error);
          alert('No se pudo registrar el Especialidad intentelo de nuevo');
        }
      );
    }
  }

  get id(): FormControl {
    return this.especialidadForm.get('id') as FormControl;
  }
  get nombre(): FormControl {
    return this.especialidadForm.get('nombre') as FormControl;
  }
  get descripcion(): FormControl {
    return this.especialidadForm.get('descripcion') as FormControl;
  }
  borrar(): void {
    this.nombre.setValue('');
    this.descripcion.setValue('');
  }
}
