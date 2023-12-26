import { StatusStudent } from './../../../../core/enum/statusStudent.enum';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserStudent} from '../../models/user-student';
import {StudentsService} from '@pages/students/service/students.service';
import {ListCompany} from '@app/pages/company/models/list-company';
import {CompanyService} from '@app/pages/company/service/company.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ListProjects} from "@pages/project/models/list-projects";
import {ProjectsService} from "@pages/project/service/projects.service";
import { ToastrService } from '@app/shared/services/toastr.service';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.scss'],
})
export class ProfileStudentComponent implements OnInit {
  @Input() idStudent!: number;
  @Input() display = false;
  @Output() closeModal = new EventEmitter<UserStudent>();
  @Output() editStudent = new EventEmitter<UserStudent>();
  student!: UserStudent;
  assignCompanyDisplay: boolean = false;
  assignProjectDisplay: boolean = false;
  companyOptions: ListCompany[] = [];
  projects: ListProjects[] = [];
  formAssigment: FormGroup;
  formAssigmentProject: FormGroup;
  statusStudent = StatusStudent;
  constructor(
    private studentsService: StudentsService,
    private companyService: CompanyService,
    private formBuilder: FormBuilder,
    private projectsService: ProjectsService,
    private toastService: ToastrService,
  ) {
  }

  ngOnInit() {
    this.studentsService.getStudentProfile(this.idStudent).subscribe({
      next: (student: UserStudent) => {
        this.student = student;
      },
      error: (err: any) => {
        this.hidden();
      },
    });

    this.formAssigment = this.formBuilder.group({
      idCompany: [0, Validators.required],
    });

    this.formAssigmentProject = this.formBuilder.group({
      idProject: [0, Validators.required],
    });
  }

  hidden() {
    this.closeModal.emit(null);
  }

  hiddenModalWithStudent() {
    this.editStudent.emit(this.student);
  }

  showAssignCompanyModal() {
    this.getCompanies();
    this.assignCompanyDisplay = true;
  }
  showAssignProjectModal() {
    this.getProjects();
    this.assignProjectDisplay = true;
  }

  hiddenAssignCompanyModal() {
    this.assignCompanyDisplay = false;
    this.assignProjectDisplay = false;
  }

  saveAssignment() {
    const idCompany = this.formAssigment.get('idCompany').value;
    this.studentsService
      .putAssignmentStudentsCompany(idCompany, this.idStudent)
      .subscribe({
        next: () => {
          this.toastService.showSuccess('Se asigno correctamente');
          this.assignCompanyDisplay = false;
          this.hidden();
        },
      });
  }

  saveAssignmentProject() {
    const idProject = this.formAssigmentProject.get('idProject').value;
    this.studentsService
      .putAssignmentStudentToProject(idProject, this.idStudent)
      .subscribe({
        next: () => {
          this.assignCompanyDisplay = false;
          this.hidden();
        },
      });
  }


  getCompanies() {
    this.companyService.getListCompany(this.student.idCareer).subscribe({
      next: (companies) => {
        this.companyOptions = companies.results;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  getProjects() {
    this.projectsService.postListProjects(this.student.idCompany, {page: 0, limit: 100}).subscribe({
      next: (data) => {
        this.projects = data.results;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
