import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { ResponseI } from '../models/response-i';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthService) { }

  intercept(request: HttpRequest<ResponseI>, next: HttpHandler): Observable<HttpEvent<ResponseI>> {
    // add authorization header with jwt token if available
    let currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.jwtAccess) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.jwtAccess}`
        }
      });
    }

    return next.handle(request);
  }
}