import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "@app/auth/servicies/auth.service";
import {RootAppService} from "@shared/services/root-app.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    protected authService: AuthService,
    protected rootAppService: RootAppService,
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
    if (!this.authService.isLoggedIn()) { 
      this.rootAppService.redirectLogin();
      return false;
    } else {
      return true;
    }
  }
}
