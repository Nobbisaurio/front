import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RouterApi } from '@app/shared/helpers/routerApi';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReportByCompany } from '../models/report-company';
import { ReportByTutor } from '../models/report-tutor';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  constructor(private http: HttpClient) {}

  getArrayDataTutor(idAcademicTutor: number): Observable<ReportByTutor[]> {
    return this.http.get<ReportByTutor[]>(RouterApi.urlReportByAcademicTutor + idAcademicTutor, {
      headers: this.headers,
    });
  }

  getReportCompany(idCompany: number): Observable<ReportByCompany> {
    return this.http.get<ReportByCompany>(RouterApi.urlReportByCompany + idCompany, {
      headers: this.headers,
    });
  }
}
