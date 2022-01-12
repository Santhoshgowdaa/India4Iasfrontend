import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class AddHeaderInterceptor implements HttpInterceptor {
    token: string;
    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.token = sessionStorage.getItem('token');
        if (this.token) {
            req = req.clone({
                setHeaders: {
                    'Content-type': 'application/json',
                    'responseType': 'json',
                    'Access-Control-Allow-Origin': 'http://localhost:4300',
                    'Access-Control-Allow-Credentials': 'false',
                    'Authorization': 'Bearer' + ' ' + this.token
                },
                withCredentials: false
            });
        } else {
            req = req.clone({
                setHeaders: {
                    'Content-type': 'application/json',
                    'responseType': 'json',
                    'Access-Control-Allow-Origin': 'http://localhost:4300',
                    'Access-Control-Allow-Credentials': 'false',
                },
                withCredentials: false
            });
        }
        return next.handle(req);
    }

}

