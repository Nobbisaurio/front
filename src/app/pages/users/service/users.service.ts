import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterApi } from '@app/shared/helpers/routerApi';
import { ToastrService } from '@app/shared/services/toastr.service';
import { Observable, tap } from 'rxjs';
import { ListPassword, ListUsers } from '../models/list-users';
import { ListUser} from '../models/list-users';
import { CreateUsers } from '../models/create-users';
import {UserAuth} from "@core/models/user-auth";
import { PaginationModel, PaginationOptions } from '@app/core/models/pagination-model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })
  constructor(

    private http: HttpClient,
    private toastService: ToastrService

  ) {}

  getListUsers(idCareer: number, options: PaginationOptions): Observable<PaginationModel<ListUsers>> {
    return this.http.post<PaginationModel<ListUsers>>(RouterApi.urlUsersActive, options, {
      headers: this.headers,
    })
  }


  getUserById(id: number): Observable <UserAuth>{
    return this.http.get <UserAuth>(RouterApi.urlUsers + '/' + id, {
      headers: this.headers
    })
  }

  getUserByRole(idRole: number): Observable <ListUsers []>{
    return this.http.get <ListUsers []>(RouterApi.urlUsersByRole + idRole, {
      headers: this.headers
    })
  }
  postCreateUsers(data: CreateUsers): Observable <CreateUsers []>{
    return this.http.post <CreateUsers []>(RouterApi.urlUsers, data, {
      headers: this.headers
    })
  }

  deleteUsers(users: ListUsers): Observable <void>{
    return this.http.delete <void>(RouterApi.urlUsers + '/' + users.id, {
      headers: this.headers
    })

  }
  putUpdateUsers(users: ListUsers): Observable <ListUsers>{
    return this.http.patch <ListUsers> (RouterApi.urlUsers + '/' + users.id , users, {
      headers: this.headers
    })
  }

  patchUpdateById(users: ListUser): Observable <ListUser>{
    return this.http.patch <ListUser> (RouterApi.urlUsers + '/' + users.id, users, {
      headers: this.headers
    })
  }


  postUpdatePassword(users: ListPassword): Observable <ListPassword>{
    return this.http.post <ListPassword> (RouterApi.urlUsers + '/' + users.currentPassword, users, {
      headers: this.headers
    })
  }

}
