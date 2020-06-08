import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/Services/auth/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  userlogiado: string;
  esUserAdmin: boolean;

  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userlogiado = this.tokenStorageService.getUsername();
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
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

  cerrarSesion() {
    this.tokenStorageService.signOut();
    this.router.navigate(["/home"]);
    // window.location.reload();
  }
}
