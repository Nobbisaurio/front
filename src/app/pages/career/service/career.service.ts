import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterApi } from '@app/shared/helpers/routerApi';
import { ToastrService } from '@app/shared/services/toastr.service';
import { Observable } from 'rxjs';
import { CreateCareer } from '../models/create-career';
import { ListCareer } from '../models/list-career';
import { PaginationModel, PaginationOptions } from '@app/core/models/pagination-model';

@Injectable({
  providedIn: 'root'
})
export class CareerService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  constructor(
    private http: HttpClient,
    private toastService: ToastrService
  ) {}


  getListCareer(): Observable <ListCareer[]>{
    return this.http.get <ListCareer[]>(RouterApi.urlCareerActive, {
      headers: this.headers,

    })
  }


  postListCareer(options: PaginationOptions): Observable<PaginationModel<CreateCareer>> {
    return this.http.post<PaginationModel<CreateCareer>>(RouterApi.urlCareerActive, options, {
      headers: this.headers,
    })
  }


  getCareerById(id: number): Observable <ListCareer>{
    return this.http.get <ListCareer>(RouterApi.urlCareer + '/' + id, {
      headers: this.headers
    })
  }

  postCreateCareer(data: CreateCareer): Observable <CreateCareer>{
    console.log(data)
    return this.http.post <CreateCareer >(RouterApi.urlCareer, data, {
      headers: this.headers
    })
  }
  deleteCareer(career: ListCareer): Observable <void>{
    return this.http.delete <void>(RouterApi.urlCareer + '/' + career.id, {
      headers: this.headers
    })
  }
  putUpdateCareer(career: CreateCareer): Observable <ListCareer>{
    return this.http.put <ListCareer> (RouterApi.urlCareer + '/' + career.id, career, {
      headers: this.headers
    })

}
}
