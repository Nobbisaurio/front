import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CompanyService} from "@pages/company/service/company.service";
import {ListCompany} from "@pages/company/models/list-company";
import {AuthService} from "@app/auth/servicies/auth.service";
import {mergeMap, switchMap, tap} from "rxjs";
import {ToastrService} from "@shared/services/toastr.service";
import {ListProjects} from '../../models/list-projects';
import {ProjectsService} from '../../service/projects.service';
import {ListStudents} from '@app/pages/students/models/list-students';
import {StudentsService} from '@app/pages/students/service/students.service';


@Component({
  selector: 'app-assignament-student',
  templateUrl: './assignament-project.component.html',
  styleUrls: ['./assignament-project.component.scss']
})
export class AssignamentProjectComponent implements OnInit {
  formAssigmentProjects: FormGroup;
  students: ListStudents[] = [];
  projects: ListProjects[] = [];
  studentsSelected: ListStudents[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private projectsService: ProjectsService,
    private studentService: StudentsService,
    private authService: AuthService,
    private toastService: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.formAssigmentProjects = this.formBuilder.group({
      idProject: [0, [Validators.required]],
    });
    this.loadData();
  }

  loadData() {
    this.studentsSelected = [];
    this.studentService.getStudentsWithoutProjects(this.authService.company.id)
      .pipe(
        tap((students) => {
          this.students = students;
        }),
        switchMap(() => this.projectsService.postListProjects(this.authService.company.id, {
          page: 0,
          limit: 100
        })),
      )
      .subscribe(
        (res) => {
          this.projects = res.results;
        },
      )
  }

  saveAssigment() {
    const idStudents = this.studentsSelected.map((student) => student.id);
    this.studentService.putAssignStudentsToProject(this.formAssigmentProjects.value.idProject, idStudents)
      .subscribe(() => {
        this.toastService.showSuccess('Se asigno correctamente los estudiantes al proyecto.');
        this.loadData();
      })
  }

}
