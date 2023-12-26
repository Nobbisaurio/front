import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterApi } from '@app/shared/helpers/routerApi';
import { ToastrService } from '@app/shared/services/toastr.service';
import { Observable } from 'rxjs';
import { ListAgreement } from '../models/list-agreement';
import { CreateAgreement } from '../models/create-agreement';
import { PaginationModel, PaginationOptions } from '@app/core/models/pagination-model';
import { AgreementCompany } from '../models/agreement-company';

@Injectable({
  providedIn: 'root'
})
export class AgreementService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })
  constructor(

    private http: HttpClient,
    private toastService: ToastrService

  ) {}

  getAgreementProfile(id: number): Observable <AgreementCompany>{
    console.log(id);
    return this.http.get <AgreementCompany>(RouterApi.urlAgreement + '/' + id, {
      headers: this.headers,
    });
  }

  downloadFile(name : string): Observable <Blob>{
    return this.http.post(RouterApi.urlDownFile, {name},{
      headers: this.headers,
      responseType: 'blob'
    });
  }

  getnotifyByEmail(id: number): Observable <void>{
    return this.http.get <void>(RouterApi.urlAgreementNotificate + id, {
      headers: this.headers,
    });
  }


  postListAgreement(idCareer: number, options: PaginationOptions): Observable<PaginationModel<ListAgreement>> {
    return this.http.post<PaginationModel<ListAgreement>>(RouterApi.urlAgreement + '/' + idCareer, options, {
      headers: this.headers,
    })
  }


  getCreateAgreement(): Observable <CreateAgreement []>{
    return this.http.get <CreateAgreement []>(RouterApi.urlAgreement, {
      headers: this.headers
    })

  }

  deleteAgreement(agreement: ListAgreement): Observable <void>{
    return this.http.delete <void>(RouterApi.urlAgreement + '/' + agreement.id, {
      headers: this.headers
    })

  }
  putUpdateAgreement(agreement: ListAgreement): Observable <ListAgreement>{
    return this.http.patch <ListAgreement> (RouterApi.urlAgreement + '/' + agreement.id , agreement, {
      headers: this.headers
    })
  }
  postCreateAgreement(agreement:ListAgreement): Observable <ListAgreement>{
    return this.http.post <ListAgreement> (RouterApi.urlAgreement , agreement, {
      headers: this.headers
    })
  }

}
