import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterApi } from '../helpers/routerApi';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(
    private http: HttpClient,
  ) { }

  uploadFile(file: File):Observable<{path:string}> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<{path:string}>(RouterApi.urlUploadFile, formData );
  }

  downloadFile(path: string): Observable<Blob> {
    return this.http.post(RouterApi.urlDownFile,{
      name:path
    },{ responseType: 'blob' });
  }

  removeFile(path: string): Observable<void> {
    return this.http.delete<void>(RouterApi.urlUploadFile + '/' + path);
  }

}
