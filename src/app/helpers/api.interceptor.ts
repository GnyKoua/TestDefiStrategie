import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  /**
   *
   * @param {AuthService} _authService
   */
  constructor(
    private _authService: AuthService,
  ) { }

  /**
   * Add Bearer Token in header if user is logged in and request to api
   * @param request
   * @param next
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this._authService.IsAuthed()) {
      request = request.clone({
        headers: request.headers.append('Authorization', `Bearer ${this._authService.UserDatas().access_token}`)
      });
    }

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(() => err);
      })
    );
  }
}
