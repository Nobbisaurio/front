import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {finalize, map, Observable} from 'rxjs';
import {ToastrService} from "@shared/services/toastr.service";
import {AuthService} from "@app/auth/servicies/auth.service";
import {LocalStorageService} from "@core/storage/storage.service";
import {NgxUiLoaderService} from "ngx-ui-loader";

@Injectable()
export class SessionInterceptor implements HttpInterceptor {
  private activeRequests = 0;
  constructor(
    private toasterService: ToastrService,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private blockUIService: NgxUiLoaderService,
  ) {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let req = request;

    if (this.authService.isLoggedIn()) {
      req = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.localStorageService.getItem('accessToken')}`
        }
      });
    }

    if (this.activeRequests === 0) {
      this.blockUIService.start();
      this.activeRequests++;
    }
    return next.handle(req)
      .pipe(
        map((event: HttpEvent<any>) => {
          return event;
        }),
        finalize(() => {
          this.stopLoading();
        })
      )
  }

  private stopLoading(): void {
    this.activeRequests--;
    if (this.activeRequests === 0) this.blockUIService.stop();
  }
}
