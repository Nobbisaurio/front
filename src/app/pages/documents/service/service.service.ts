import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterApi } from '@app/shared/helpers/routerApi';
import { Observable } from 'rxjs';
import { CreateDocument } from '../models/create-document';

@Injectable( {
  providedIn: 'root'
} )
export class DocumentsService {

  constructor(
    private http: HttpClient,
  ) { }

  private headers = new HttpHeaders( {
    'Content-Type': 'application/json',
  } );

  getDocuments(): Observable<CreateDocument[]> {
    return this.http.get<CreateDocument[]>( RouterApi.urlDocuments, {
      headers: this.headers
    } );
  }

  createDocument( document: CreateDocument ): Observable<CreateDocument> {
    return this.http.post<CreateDocument>( RouterApi.urlDocuments, document, {
      headers: this.headers
    } );
  }
}
