import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { EspecialidadService } from 'src/app/Services/especialidad.service';
import { Hospital } from 'src/app/models/hospital.model';
import { HospitalService } from 'src/app/Services/hospital.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss'],
})
export class HospitalComponent implements OnInit {
  hospitalForm: FormGroup;
  titulo: string;
  constructor(
    private fb: FormBuilder,
    private service: HospitalService,
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
        });
      } else {
        this.titulo = 'Crear';
      }
    });
  }

  private setValueForm(hospital: Hospital): void {
    this.id.setValue(hospital.id);
    this.nombreHospital.setValue(hospital.nombreHospital);
    this.direccion.setValue(hospital.direccion);
    this.titulo = 'Editar';
  }

  private crearEspecialidadForm() {
    this.hospitalForm = this.fb.group({
      id: [null],
      nombreHospital: ['', [Validators.required]],
      direccion: [''],
    });
  }
  crearEspecialidad(value): void {
    if (this.id.value === null) {
      this.service.crear(value).subscribe(
        (response) => {
          this.router.navigate(['/hospitales/listar']);
        },
        (error) => {
          alert('No se pudo Actualizar el Hospital intentelo de nuevo');
        }
      );
    } else {
      this.service.actualizar(value).subscribe(
        (response) => {
          this.router.navigate(['/hospitales/listar']);
        },
        (error) => {
          alert('No se pudo registrar el Hospital intentelo de nuevo');
        }
      );
    }
  }

  get id(): FormControl {
    return this.hospitalForm.get('id') as FormControl;
  }
  get nombreHospital(): FormControl {
    return this.hospitalForm.get('nombreHospital') as FormControl;
  }
  get direccion(): FormControl {
    return this.hospitalForm.get('direccion') as FormControl;
  }
  borrar(): void {
    this.nombreHospital.setValue('');
    this.direccion.setValue('');
  }
}
