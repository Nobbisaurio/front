import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ApiAuth} from "@app/auth/helpers/api-auth";
import {ToastrService} from "@shared/services/toastr.service";
import {LocalStorageService} from "@core/storage/storage.service";
import {RootAppService} from '@app/shared/services/root-app.service';
import {ResponseLogin} from "@app/auth/models/response-login";
import {CompanyAuth, ProjectAuth, RolOrCareer, UserAuth} from "@core/models/user-auth";
import {PayloadModel} from "@app/auth/models/payload-model";
import {UsersService} from "@pages/users/service/users.service";
import {Observable, of, tap} from "rxjs";
import {ListPassword, ListUser} from '@app/pages/users/models/list-users';
import {rolEnum} from "@core/enum/rol.enum";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(
    private http: HttpClient,
    private toastService: ToastrService,
    private localStorageService: LocalStorageService,
    private rootAppService: RootAppService,
    private userService: UsersService
  ) {
  }

  forgotPassword(email: string): Observable<string> {
    return this.http.post<string>(ApiAuth.urlForgetPassword, {email}).pipe(
      tap(() => {
        this.toastService.showSuccess(
          'Se ha enviado un correo electrónico con instrucciones para restablecer su contraseña'
        );
      })
    );
  }

  resetPassword(newPassword: string, token: string): Observable<string> {
    return this.http
      .post<string>(
        ApiAuth.urlResetPassword,
        {newPassword, token},
        {headers: this.headers}
      )
      .pipe(
        tap(() => {
          this.toastService.showSuccess('Contraseña reestablecida');
        })
      );
  }


  changePassword(email: string, currentPassword: string, newPassword: string): Observable<void> {
    return this.http
      .post<void>(
        ApiAuth.urlChangePassword,
        {email, currentPassword, newPassword},
        {headers: this.headers}
      )

  }

  login(credentials: Credential): Observable<ResponseLogin> {
    return this.http
      .post<ResponseLogin>(ApiAuth.urlLogin, credentials, {
        headers: this.headers,
      })
      .pipe(
        tap((res) => {
          this.toastService.showSuccess('Bienvenido');
          this.localStorageService.setItem('accessToken', res.accessToken);
          const payload = this.decodeToken(res.accessToken);
          this.userService.getUserById(payload.id).subscribe((user: UserAuth) => {
            console.log('user: ', user)
            this.localStorageService.setItem('currentUser', user);
            this.rootAppService.redirectDashboard();
          });
        })
      );
  }

  decodeToken(token: string): PayloadModel {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

  logout(): void {
    this.localStorageService.clear();
    this.rootAppService.redirectLogin();
  }

  get currentUserValue(): UserAuth | null {
    return this.localStorageService.getItem<UserAuth>('currentUser');
  }

  get career(): RolOrCareer {
    const rolList = rolEnum;
    switch (this.currentUserValue.rol.code) {
      case rolList.EST:
        return this.currentUserValue.student.career;
      case rolList.CA:
        return this.currentUserValue.tutor.career;
      case rolList.TA:
        return this.currentUserValue.tutor.career;
      case rolList.CE :
        return this.currentUserValue.company.career;
      case rolList.TE:
        return this.currentUserValue.company.career;
      default:
        return this.currentUserValue.rol;
    }
  }

  get project(): ProjectAuth {
    return this.currentUserValue.project;
  }

  get rol(): RolOrCareer {
    return this.currentUserValue.rol;
  }

  get company(): CompanyAuth {
    return this.currentUserValue.company ?? this.currentUserValue.tutor.company;
  }

  get user$(): Observable<UserAuth | null> {
    return of(this.localStorageService.getItem<UserAuth>('currentUser'));
  }

  isLoggedIn(): boolean {
    return this.localStorageService.getItem('accessToken') || false;
  }


  get currentUser(): ListUser | null {
    return this.localStorageService.getItem<ListUser>('currentUser');
  }


  postUpdatePassword(users: ListPassword): Observable<ListPassword> {
    return this.http.post <ListPassword>(ApiAuth.urlChangePassword + users.newPassword, users, {
      headers: this.headers
    })
  }

}
