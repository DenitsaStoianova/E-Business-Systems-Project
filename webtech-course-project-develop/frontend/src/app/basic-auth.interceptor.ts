import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TOKEN_LOCAL_STORAGE_KEY } from './constants';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const reqHeader = req.clone({ headers: req.headers.set('Authorization', TOKEN_LOCAL_STORAGE_KEY) });
    return next.handle(reqHeader);
  }
