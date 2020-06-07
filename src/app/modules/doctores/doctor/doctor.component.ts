import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Doctor } from 'src/app/models/doctor.models';
import { DoctorService } from 'src/app/Services/doctor.service';
import { PacienteService } from 'src/app/Services/paciente.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  doctorForm: FormGroup;
  titulo: string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: DoctorService,
    protected route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.crearDoctorForm();
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

  private setValueForm(p: Doctor): void {
    this.id.setValue(p.id);
    this.nombre.setValue(p.nombre);
    this.apellido.setValue(p.apellido);
    this.fechaNacimiento.setValue(p.fechaNacimiento);
    this.direccion.setValue(p.direccion);
    this.titulo = 'Editar';
  }

  private crearDoctorForm() {
    this.doctorForm = this.fb.group({
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
        this.router.navigate(['/doctores/listar']);
      });
    } else {
      this.service.actualizar(value).subscribe((response) => {
        this.router.navigate(['/doctores/listar']);
      });
    }
  }

  borrar() {
    this.doctorForm.reset();
  }

  get id(): FormControl {
    return this.doctorForm.get('id') as FormControl;
  }
  get nombre(): FormControl {
    return this.doctorForm.get('nombre') as FormControl;
  }
  get apellido(): FormControl {
    return this.doctorForm.get('apellido') as FormControl;
  }
  get fechaNacimiento(): FormControl {
    return this.doctorForm.get('fechaNacimiento') as FormControl;
  }
  get direccion(): FormControl {
    return this.doctorForm.get('direccion') as FormControl;
  }
}
