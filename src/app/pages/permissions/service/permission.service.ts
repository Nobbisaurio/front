import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterApi } from '@app/shared/helpers/routerApi';
import { ToastrService } from '@app/shared/services/toastr.service';
import { Observable, tap } from 'rxjs';
import { ListPermissions } from '../models/list-permissions';
import { CreatePermissions } from '../models/create-permissions';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })
  constructor(

    private http: HttpClient,
    private toastService: ToastrService

  ) {}

  getListPermission(): Observable <ListPermissions []>{
    return this.http.get <ListPermissions []>(RouterApi.urlPermissions, {
      headers: this.headers
    })

  }
  getCreatePermission(): Observable <CreatePermissions []>{
    return this.http.get <CreatePermissions []>(RouterApi.urlPermissions, {
      headers: this.headers
    })

  }

  deletePermission(permission: ListPermissions): Observable <void>{
    return this.http.delete <void>(RouterApi.urlPermissions + '/' + permission.id, {
      headers: this.headers
    })

  }
  putUpdatePermission(permission: ListPermissions): Observable <ListPermissions>{
    return this.http.put<ListPermissions> (RouterApi.urlPermissions + '/' + permission.id , permission, {
      headers: this.headers
    })
  }
  postCreatePermission(permission:ListPermissions): Observable <ListPermissions>{
    return this.http.post <ListPermissions> (RouterApi.urlPermissions , permission, {
      headers: this.headers
    })

  }

}
