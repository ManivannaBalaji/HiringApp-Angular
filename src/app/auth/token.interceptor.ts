import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from '../service/auth.service';
import {Router} from '@angular/router';

@Injectable()
export class TokenInterceptor {
    constructor(private authService : AuthService, private router : Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: {
                authorization: `Bearer ${this.authService.getUserToken()}`
            }
        });
        return next.handle(request);
    }
}