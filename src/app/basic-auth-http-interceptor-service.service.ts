import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHttpInterceptorServiceService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (localStorage.getItem('accessToken')) {
      req = req.clone({
        setHeaders: {
          Authorization: localStorage.getItem('accessToken')
        }
      });
    }

    return next.handle(req);

  }
}

