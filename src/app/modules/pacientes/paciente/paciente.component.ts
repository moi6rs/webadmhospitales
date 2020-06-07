import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Paciente } from 'src/app/models/paciente.model';
import { PacienteService } from 'src/app/Services/paciente.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss'],
})
export class PacienteComponent implements OnInit {
  pacienteForm: FormGroup;
  titulo: string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: PacienteService,
    protected route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.crearEspecialidadForm();
    this.route.paramMap.subscribe((params) => {
      const id: number = +params.get('id');
      if (id) {
        this.service.ver(id).subscribe((p) => {
          this.setValueForm(p);
        });
      } else {
        this.titulo = 'Crear';
      }
    });
  }

  private setValueForm(p: Paciente): void {
    this.id.setValue(p.id);
    this.nombre.setValue(p.nombre);
    this.apellido.setValue(p.apellido);
    this.fechaNacimiento.setValue(p.fechaNacimiento);
    this.direccion.setValue(p.direccion);
    this.titulo = 'Editar';
  }

  private crearEspecialidadForm() {
    this.pacienteForm = this.fb.group({
      id: [null],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      fechaNacimiento: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
    });
  }

  crear(value) {
    if (this.id.value === null) {
      this.service.crear(value).subscribe((response) => {
        this.router.navigate(['/pacientes/listar']);
      });
    } else {
      this.service.actualizar(value).subscribe((response) => {
        this.router.navigate(['/pacientes/listar']);
      });
    }
  }

  borrar() {
    this.pacienteForm.reset();
  }

  get id(): FormControl {
    return this.pacienteForm.get('id') as FormControl;
  }
  get nombre(): FormControl {
    return this.pacienteForm.get('nombre') as FormControl;
  }
  get apellido(): FormControl {
    return this.pacienteForm.get('apellido') as FormControl;
  }
  get fechaNacimiento(): FormControl {
    return this.pacienteForm.get('fechaNacimiento') as FormControl;
  }
  get direccion(): FormControl {
    return this.pacienteForm.get('direccion') as FormControl;
  }
}
