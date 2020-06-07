import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { BASE_ENDPOINT } from 'src/app/config/app';
import { Paciente } from 'src/app/models/paciente.model';
import { PacienteService } from 'src/app/Services/paciente.service';

@Component({
  selector: 'app-pacientes-listar',
  templateUrl: './pacientes-listar.component.html',
  styleUrls: ['./pacientes-listar.component.scss']
})
export class PacientesListarComponent implements OnInit {

  dataSourceTable: MatTableDataSource<any>;
  // tslint:disable-next-line: max-line-length
  displayedColumns: string[] = ['foto', 'nombre', 'apellido', 'nacimiento', 'direccion', 'creacion', 'actualizacion', 'acciones'];
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  searchKey: string;
  errorMessage = '';
  baseEndpoint = BASE_ENDPOINT + '/pacientes';
  constructor(private service: PacienteService) {}
  especialidades: Paciente[];

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

  eliminar(paciente: Paciente){
    this.service.eliminar(paciente.id).subscribe(
      response => {
          console.log("eliminado");
      });
    }
}
