import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS, HttpHandler } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

    constructor(private token: TokenStorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        let authRequest = req;
        const token = this.token.getToken();
        if (token) {
            authRequest = req.clone({
                //setHeaders: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)
                setHeaders: {
                    authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(authRequest);
    }
}

export const httpInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }
];