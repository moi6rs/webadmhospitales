import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { Hospital } from 'src/app/models/hospital.model';
import { HospitalService } from 'src/app/Services/hospital.service';

@Component({
  selector: 'app-hospitales-listar',
  templateUrl: './hospitales-listar.component.html',
  styleUrls: ['./hospitales-listar.component.scss'],
})
export class HospitalesListarComponent implements OnInit {
  dataSourceTable: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'nombre',
    'direccion',
    'creacion',
    'actualizacion',
    'acciones',
  ];
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  searchKey: string;
  errorMessage = '';
  constructor(private service: HospitalService) {}
  especialidades: Hospital[];

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.service.listar().subscribe((response) => {
      this.dataSourceTable = new MatTableDataSource(response);
      this.dataSourceTable.sort = this.sort;
      this.dataSourceTable.paginator = this.paginator;
    });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // dataSourceTable defaults to lowercase matches
    this.dataSourceTable.filter = filterValue;
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter('');
  }

  eliminar(especialidad: Hospital) {
    this.service.eliminar(especialidad.id).subscribe((response) => {
      console.log('eliminado');
    });
  }
}
