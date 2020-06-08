import { Component, DoCheck, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/Services/auth/token-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, DoCheck {
  userlogiado: string;
  esUserAdmin: boolean;
  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userlogiado = this.tokenStorageService.getUsername();
  }
  private tipoUser(authority: string): boolean {
    this.esUserAdmin = false;
    for (const tipo of this.tokenStorageService.getAuthorities()) {
      if (tipo === authority) {
        this.esUserAdmin = true;
      }
    }
    return this.esUserAdmin;
  }

  ngDoCheck(): void {
    this.userlogiado = this.tokenStorageService.getUsername();
    this.esUserAdmin = this.tipoUser('ROLE_ADMINISTRADOR');
  }
}
