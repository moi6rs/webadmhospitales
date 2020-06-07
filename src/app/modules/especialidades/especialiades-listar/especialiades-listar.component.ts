import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { BASE_ENDPOINT } from 'src/app/config/app';
import { Especialidad } from 'src/app/models/especialidad.model';
import { EspecialidadComponent } from '../especialidad/especialidad.component';
import { EspecialidadService } from 'src/app/Services/especialidad.service';

@Component({
  selector: 'app-especialiades-listar',
  templateUrl: './especialiades-listar.component.html',
  styleUrls: ['./especialiades-listar.component.scss'],
})
export class EspecialiadesListarComponent implements OnInit {
  dataSourceTable: MatTableDataSource<any>;
  // tslint:disable-next-line: max-line-length
  displayedColumns: string[] = ['avatar','nombre', 'descripcion', 'fechaCreacion', 'fechaActualizacion', 'acciones'];
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  searchKey: string;
  errorMessage = '';
  baseEndpoint = BASE_ENDPOINT + '/especialidades';
  constructor(private especialidadService: EspecialidadService,
              private dialogService: MatDialog) {}
  especialidades: Especialidad[];

  ngOnInit() {
    this.listar();
  }

  abrirEspecialidadFormDialog(): void {
    const dialogRef = this.dialogService.open(EspecialidadComponent, {
      width: '700px',
      data: {}
    });

    dialogRef.afterClosed()
      .subscribe(result => {
        if (result) {
          //const clienteCreated: Cliente = result as Cliente;
          //this.nombreCompletoCliente.setValue(`${clienteCreated.nombres} ${clienteCreated.apellidos}`);
          //this.busqueda.setValue(clienteCreated.ciNit);
          //this.clienteId.setValue(clienteCreated.id);
        }
      });
  }

  listar(){
    this.especialidadService.listarEspecialidades().subscribe(
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

  eliminar(item){

  }
}
