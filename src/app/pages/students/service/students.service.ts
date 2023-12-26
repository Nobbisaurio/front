import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {RouterApi} from '@app/shared/helpers/routerApi';
import {Observable} from 'rxjs';
import {ListStudents} from '../models/list-students';
import {CreateStudents} from '../models/create-students';
import {PaginationModel, PaginationOptions} from "@core/models/pagination-model";
import {UserStudent} from "@pages/students/models/user-student";
import {Student} from '@app/pages/project/models/user-project';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  constructor(
    private http: HttpClient,
  ) {
  }

  getListStudents(idCareer: number, options: PaginationOptions): Observable<PaginationModel<ListStudents>> {
    return this.http.post<PaginationModel<ListStudents>>(RouterApi.urlStudentsActive + '/' + idCareer, options, {
      headers: this.headers,
    })
  }

  postAllStudents(options: PaginationOptions): Observable<PaginationModel<ListStudents>> {
    return this.http.post<PaginationModel<ListStudents>>(RouterApi.urlAllStudents, options, {
      headers: this.headers,
    });
  }

  postStudentByCompany(idCompany: number, options: PaginationOptions): Observable<PaginationModel<ListStudents>> {
    return this.http.post<PaginationModel<ListStudents>>(RouterApi.urlStudentsByCompany + idCompany, options, {
      headers: this.headers,
    });
  }

  getStudentsToAssign(idCareer: number): Observable<ListStudents[]> {
    return this.http.get<ListStudents[]>(RouterApi.urlStudentsToAssign + idCareer, {
      headers: this.headers
    })
  }

  getStudentProfile(id: number): Observable<UserStudent> {
    return this.http.get <UserStudent>(RouterApi.urlStudents + '/' + id, {
      headers: this.headers
    });
  }

  uploadStudents(file: File): Observable<void> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post <void>(RouterApi.urlStudentsUpload, formData)
  }


  getStudentsWithoutProjects(idCompany: number): Observable<ListStudents[]> {
    return this.http.get<ListStudents[]>(RouterApi.urlStudentsWithoutProjects + idCompany, {
      headers: this.headers
    })
  }

  deleteStudents(students: ListStudents): Observable<void> {
    return this.http.delete <void>(RouterApi.urlStudents + '/' + students.id, {
      headers: this.headers
    })
  }

  putUpdateStudents(students: CreateStudents, idStudent: number): Observable<CreateStudents> {
    return this.http.put <CreateStudents>(RouterApi.urlStudents + '/' + idStudent, students, {
      headers: this.headers
    })
  }

  postCreateStudents(students: CreateStudents): Observable<CreateStudents> {
    return this.http.post <CreateStudents>(RouterApi.urlStudents, students, {
      headers: this.headers
    })
  }

  putAssignStudents(idCompany: number, idStudents: number[]): Observable<void> {
    return this.http.put<void>(RouterApi.urlStudentsToAssignToCompany, {
      idCompany,
      idStudents
    }, {
      headers: this.headers
    })
  }

  putAssignmentStudentsCompany(idCompany: number, idStudent: number) {
    return this.http.put(RouterApi.urlStudentsCompany, {
      idCompany,
      idStudent
    }, {
      headers: this.headers
    })
  }

  putAssignmentStudentToProject(idProject: number, idStudent: number) {
    return this.http.put(RouterApi.urlStudentsToProject, {
      idProject,
      idStudent
    }, {
      headers: this.headers
    })
  }

  putUnassingStudents(students: Student): Observable<void> {
    return this.http.put <void>(RouterApi.urlStudentsUnassign + students.id, {
      headers: this.headers
    })
  }

  putAssignStudentsToProject(idProject: number, idStudents: number[]): Observable<void> {
    return this.http.put<void>(RouterApi.urlStudentsToAssignToProject, {
      idProject,
      idStudents
    }, {
      headers: this.headers
    })
  }

}
