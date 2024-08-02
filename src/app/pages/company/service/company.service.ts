import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterApi } from '@app/shared/helpers/routerApi';
import { Observable } from 'rxjs';
import { ListCompany } from '../models/list-company';
import { CreateCompany } from '../models/create-company';
import {PaginationModel, PaginationOptions} from "@core/models/pagination-model";
import { Company } from '../models/user-company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  getCompany() {
    throw new Error('Method not implemented.');
  }
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  constructor(
    private http: HttpClient,
  ) {}

  getCompanyProfile(id: number): Observable <Company>{
    return this.http.get <Company>(RouterApi.urlCompanyProfile + '/' + id, {
      headers: this.headers
    });
  }


  getListCompany(idCareer: number, options?:PaginationOptions): Observable<PaginationModel<ListCompany>> {
    return this.http.post<PaginationModel<ListCompany>>(RouterApi.urlCompany + '/' + idCareer, options, {
      headers: this.headers,
    })
  }

  getCareers(): Observable <{ id: number; name: string; }[]>{
    return this.http.get <{ id: number; name: string; }[]>('https://apicomplexivo.onrender.com/api/career', {
      headers: this.headers
    })
  }

  getCreateCompany(): Observable <CreateCompany []>{
    return this.http.get <CreateCompany []>(RouterApi.urlCompany, {
      headers: this.headers
    })
  }

  deleteCompany(company: ListCompany): Observable <void>{
    return this.http.delete <void>(RouterApi.urlCompany + '/' + company.id, {
      headers: this.headers
    })

  }
  putUpdateCompany(company: ListCompany): Observable <ListCompany>{
    return this.http.put <ListCompany> (RouterApi.urlCompany + '/' + company.id , company, {
      headers: this.headers
    })
  }
  postCreateCompany(company:CreateCompany): Observable <CreateCompany>{
    return this.http.post <CreateCompany>(RouterApi.urlCompany , company, {
      headers: this.headers
    })
  }

}
