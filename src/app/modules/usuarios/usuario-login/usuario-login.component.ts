import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { AuthLoginInfo } from 'src/app/models/login-info';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { NotificacionesService } from 'src/app/Services/notificaciones/notificaciones.service';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/Services/auth/token-storage.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.scss'],
})
export class UsuarioLoginComponent implements OnInit {


  loginForm: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    //private notificacionService: NotificacionesService
  ) {}

  ngOnInit() {
    this.createFormLogin();
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  private createFormLogin() {
    this.loginForm = this.formBuilder.group({
      usuario: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  public loginUsuario(valueLoginForm) {
    this.loginInfo = new AuthLoginInfo(
      valueLoginForm.usuario,
      valueLoginForm.password
    );
    this.authService.attemptAuth(this.loginInfo).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        this.reloadPage();
      },
      (error) => {
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    this.router.navigate(['/hospitales/listar']);
  }

}
