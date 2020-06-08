import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { BASE_ENDPOINT } from 'src/app/config/app';
import { Doctor } from 'src/app/models/doctor.models';
import { DoctorService } from 'src/app/Services/doctor.service';

@Component({
  selector: 'app-doctores-listar',
  templateUrl: './doctores-listar.component.html',
  styleUrls: ['./doctores-listar.component.scss']
})
export class DoctoresListarComponent implements OnInit {

  dataSourceTable: MatTableDataSource<any>;
  // tslint:disable-next-line: max-line-length
  displayedColumns: string[] = ['foto', 'nombre', 'apellido', 'nacimiento', 'direccion', 'creacion', 'actualizacion', 'acciones'];
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  searchKey: string;
  errorMessage = '';
  baseEndpoint = BASE_ENDPOINT + 'documentos';
  constructor(private service: DoctorService) {}
  doctores: Doctor[];

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.service.listar().subscribe(
      response => {
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

  eliminar(paciente: Doctor){
    this.service.eliminar(paciente.id).subscribe(
      response => {
          console.log("eliminado");
      });
    }
}
