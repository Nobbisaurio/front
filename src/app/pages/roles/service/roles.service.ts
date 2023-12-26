import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {RouterApi} from '@app/shared/helpers/routerApi';
import {Observable} from 'rxjs';
import {Role, RoleInfo} from '../models/list-roles';
import {PaginationModel, PaginationOptions} from '@app/core/models/pagination-model';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  constructor(
    private http: HttpClient
  ) {
  }

  postListRoles(options: PaginationOptions): Observable<PaginationModel<Role>> {
    return this.http.post<PaginationModel<Role>>(RouterApi.urlRoleActive, options, {
      headers: this.headers,
    })
  }

  getRole(id:number): Observable<RoleInfo> {
    return this.http.get<RoleInfo>(RouterApi.urlRoles + '/' + id , {
      headers: this.headers
    })
  }

  deleteRoles(roles: Role): Observable <void>{
    return this.http.delete <void>(RouterApi.urlRoles + '/' + roles.id, {
      headers: this.headers
    })
  }
  putUpdateRoles(roles: RoleInfo, id: number): Observable<RoleInfo> {
    return this.http.put<RoleInfo>(RouterApi.urlRoles + '/' + id, roles, {
      headers: this.headers
    })
  }
  postCreateRoles(roles: RoleInfo): Observable<RoleInfo> {
    return this.http.post<RoleInfo>(RouterApi.urlRoles, roles, {
      headers: this.headers
    })
  }

}
