import {inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route,} from '@angular/router';
import {map, Observable, tap} from 'rxjs';
import {AuthService} from '@app/auth/servicies/auth.service';
import {ToastrService} from "@shared/services/toastr.service";
import {RootAppService} from "@shared/services/root-app.service";

@Injectable({
  providedIn: 'root',
})
export class HasRoleGuard implements CanLoad, CanActivate {
  constructor(
    private authService: AuthService,
    private toastrService: ToastrService
  ) {}

  //la logica sera indentica a canloand
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    //se encuentra activada
    return this.hasRole(route);
  }

  canLoad(route: Route): Observable<boolean> {
    return this.hasRole(route);
  }
  private hasRole(route: Route | ActivatedRouteSnapshot) {
    const allowedRoles = route.data?.['allowedRoles'];
    console.log(route)
    return this.authService.user$.pipe(
      map((user) => Boolean(user && allowedRoles.includes(user.rol.code))),
      tap((hasRole) => hasRole === false && this.toastrService.showError('Acceso Denegado'))
    );
  }
}

//esta misma guarda que acabamos de crear la podriamos definir como una simple funcionm eso si usando la
//funcion inject del framework para injectar el authservice
// y esta funcion podriamos en una ruta indistintamente a la clase de la guarda

export const hasRole = (allowedRoles: string[]) => {

  return () => {
    const toastService = inject(ToastrService);
    const route = inject(RootAppService);
    return inject(AuthService).user$.pipe(
        map((user) => Boolean(user && allowedRoles.includes(user.rol.code))),
        tap((hasRole) => {
          if(hasRole === false) {
            toastService.clear();
            toastService.showError('Acceso Denegado');
            route.redirectDashboard();
          }
        })
    );
  }
}
