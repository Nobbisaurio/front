import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {RouterApi} from '@app/shared/helpers/routerApi';
import {Observable} from 'rxjs';
import {ListTutor} from '../models/list-tutor';
import {CreateTutorAcademic, CreateTutorBusiness} from '../models/create-tutor';
import {ListTutorAcademic} from "@pages/tutor/models/list-tutor-academic";
import {PaginationOptions} from "@core/models/pagination-model";

@Injectable({
  providedIn: 'root'
})
export class TutorService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  constructor(
    private http: HttpClient,
  ) {
  }

  getListTutor(): Observable<ListTutor[]> {
    return this.http.get <ListTutor []>(RouterApi.urlTutor, {
      headers: this.headers
    })

  }

  getListTutorAcademic(idCareer: number, options: PaginationOptions): Observable<ListTutor[]> {
    return this.http.post<ListTutor[]>(RouterApi.urlTutorAcademicActive + idCareer, options, {
      headers: this.headers
    })
  }

  getListTutorBusiness(idCompany: number, options: PaginationOptions): Observable<ListTutor[]> {
    return this.http.post<ListTutor[]>(RouterApi.urlTutorBusinessActive + idCompany, options,{
      headers: this.headers
    });
  }

  deleteTutor(tutor: ListTutor): Observable<void> {
    return this.http.delete <void>(RouterApi.urlTutor + '/' + tutor.id, {
      headers: this.headers
    })

  }

  putUpdateTutor(tutor: ListTutor): Observable<ListTutor> {
    return this.http.put<ListTutor>(RouterApi.urlTutor + '/' + tutor.id, tutor, {
      headers: this.headers
    })
  }


  postCreateTutorAcademic(tutor: CreateTutorAcademic): Observable<ListTutorAcademic> {
    return this.http.post<ListTutorAcademic>(RouterApi.urlTutorAcademic, tutor, {
      headers: this.headers
    })
  }

  postCreateTutorBusiness(tutor: CreateTutorBusiness): Observable<ListTutorAcademic> {
    return this.http.post<ListTutorAcademic>(RouterApi.urlTutorBusiness, tutor, {
      headers: this.headers
    })
  }


}
