import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterApi } from '@app/shared/helpers/routerApi';
import { Observable } from 'rxjs';
import { CreateDocument } from '../models/create-document';
import { ListCareer } from '@app/pages/career/models/list-career';
import { PaginationModel } from '@app/core/models/pagination-model';
import { CreateStructuringCore } from '../models/create-structuring-core';

@Injectable({
  providedIn: 'root',
})
export class DocumentsService {
  constructor(private http: HttpClient) {}

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  getDocuments(): Observable<CreateDocument[]> {
    return this.http.get<CreateDocument[]>(RouterApi.urlDocuments, {
      headers: this.headers,
    });
  }

  createDocument(document: CreateDocument): Observable<CreateDocument> {
    return this.http.post<CreateDocument>(RouterApi.urlDocuments, document, {
      headers: this.headers,
    });
  }

  updateDocument(
    id: number,
    document: CreateDocument
  ): Observable<CreateDocument> {
    return this.http.patch<CreateDocument>(
      RouterApi.urlDocuments.concat(`/${id}`),
      document,
      {
        headers: this.headers,
      }
    );
  }

  getAllCareers(): Observable<PaginationModel<ListCareer>> {
    return this.http.post<PaginationModel<ListCareer>>(
      RouterApi.urlAllCareers,
      {
        headers: this.headers,
      }
    );
  }

  getAllstructuringCores(): Observable<CreateStructuringCore[]> {
    return this.http.get<CreateStructuringCore[]>(
      RouterApi.urlStructuringCores,
      {
        headers: this.headers,
      }
    );
  }

  createOrEditStructuringcode(
    core: CreateStructuringCore
  ): Observable<CreateStructuringCore> {
    console.log("este es el core: ", core)
    return this.http.post<CreateStructuringCore>(
      RouterApi.urlStructuringCores,
      core,
      { headers: this.headers }
    );
  }
}
