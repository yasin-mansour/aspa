import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import {HttpCommunicationService} from '../services/http-communication.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private http: HttpCommunicationService){

  }
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.method === 'GET' ? req : req.clone({
      headers: req.headers.set('X-CSRF-TOKEN', this.http.clientData.token)
    });

    return next.handle(authReq);
  }
}
