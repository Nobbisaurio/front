import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterApi } from '@app/shared/helpers/routerApi';
import { Observable } from 'rxjs';
import { CreateProjects } from '../models/create-projects';
import { ListProjects } from '../models/list-projects';
import { UserProject } from '../models/user-project';
import {
  PaginationModel,
  PaginationOptions,
} from '@app/core/models/pagination-model';
import { EditProject } from '../models/edit-project';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  postListProjects(
    idCompany: number,
    options: PaginationOptions,
    idCareer?: number
  ): Observable<PaginationModel<ListProjects>> {
    const route = idCareer
      ? RouterApi.urlProjectsByCareer + idCareer
      : RouterApi.urlProjectsActive + idCompany;
    return this.http.post<PaginationModel<ListProjects>>(route, options, {
      headers: this.headers,
    });
  }

  postProjectToAssignToBusinessTutor(
    idCareer: number
  ): Observable<ListProjects[]> {
    return this.http.post<ListProjects[]>(
      RouterApi.urlProjectToAssignToBusinessTutor + idCareer,
      {
        headers: this.headers,
      }
    );
  }

  postProjectToAssignToAcademicTutor(
    idCareer: number
  ): Observable<ListProjects[]> {
    return this.http.post<ListProjects[]>(
      RouterApi.urlProjectToAssignToAcademicTutor + idCareer,
      {
        headers: this.headers,
      }
    );
  }

  postProjectToAssignToStudents(idCareer: number): Observable<ListProjects[]> {
    return this.http.post<ListProjects[]>(
      RouterApi.urlProjectToAssignToStudents + idCareer,
      {
        headers: this.headers,
      }
    );
  }

  getProjectsById(id: number): Observable<ListProjects> {
    return this.http.get<ListProjects>(RouterApi.urlProjects + '/' + id, {
      headers: this.headers,
    });
  }

  getProjectsToAssign(idCareer: number): Observable<ListProjects[]> {
    return this.http.get<ListProjects[]>(
      RouterApi.urlProjectsToAssign + idCareer,
      {
        headers: this.headers,
      }
    );
  }

  getProjectProfile(id: number): Observable<UserProject> {
    console.log(id);
    return this.http.get<UserProject>(RouterApi.urlProjects + '/' + id, {
      headers: this.headers,
    });
  }

  postCreateProjects(project: CreateProjects): Observable<CreateProjects> {
    return this.http.post<CreateProjects>(RouterApi.urlProjects, project, {
      headers: this.headers,
    });
  }

  deleteProjects(projects: ListProjects): Observable<void> {
    return this.http.delete<void>(RouterApi.urlProjects + '/' + projects.id, {
      headers: this.headers,
    });
  }

  putUpdateProjects(projects: EditProject): Observable<ListProjects> {
    return this.http.put<ListProjects>(
      RouterApi.urlProjects + '/' + projects.id,
      projects,
      {
        headers: this.headers,
      }
    );
  }

  putAssignmentProjectCompany(idCompany: number, idStudent: number) {
    return this.http.put(
      RouterApi.urlStudentsCompany,
      {
        idCompany: idCompany,
        idStudent: idStudent,
      },
      {
        headers: this.headers,
      }
    );
  }

  putAssignTutorToProject(projectId: number, academicTutorId: number) {
    return this.http.put(
      RouterApi.urlProjectToAssignToAcademicTutor,
      {
        academicTutorId,
        projectId,
      },
      {
        headers: this.headers,
      }
    );
  }
}
