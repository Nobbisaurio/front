import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProjectsService} from '../../service/projects.service';
import {StudentsService} from '@app/pages/students/service/students.service';
import {Student, UserProject} from '../../models/user-project';
import {ListStudents} from '@app/pages/students/models/list-students';
import {ConfirmationService} from 'primeng/api';
import {Company} from '@app/pages/company/models/user-company';
import {ListTutorAcademic} from '@app/pages/tutor/models/list-tutor-academic';
import {ToastrService} from '@app/shared/services/toastr.service';
import {AuthService} from "@app/auth/servicies/auth.service";
import {TutorService} from "@pages/tutor/service/tutor.service";
import {ListTutor} from "@pages/tutor/models/list-tutor";

@Component({
  selector: 'app-profile-project',
  templateUrl: './profile-project.component.html',
  styleUrls: ['./profile-project.component.scss'],
})
export class ProfileProjectComponent implements OnInit {
  @Input() idProject!: number;
  @Input() display = false;
  project!: UserProject;
  company!: Company;
  @Output() closeModal = new EventEmitter<UserProject>();
  @Output() editProjects = new EventEmitter<number>();
  hasData: boolean = false;
  tutor!: ListTutorAcademic;
  assignStudentsDisplay: boolean = false;
  assignTutorDisplay: boolean = false;
  students: ListStudents[] = [];
  studentsSelected: number[] = [];
  studentsOptions: ListStudents[] = [];
  tutorSelected: number;
  tutorOptions: ListTutor[] = [];

  constructor(
    private projectService: ProjectsService,
    private studentsService: StudentsService,
    private toastrService: ToastrService,
    private confirmationService: ConfirmationService,
    private authService: AuthService,
    private tutorService: TutorService
  ) {
  }

  ngOnInit() {
    this.projectService.getProjectProfile(this.idProject).subscribe({
      next: (project: UserProject) => {
        this.project = project;
      },
      error: () => {
        this.hidden();
      },
    });
  }

  hidden() {
    this.closeModal.emit(null);
  }

  hiddenModalWithProjects() {
    this.editProjects.emit(this.idProject);
  }

  hiddenAssignTutorModal() {
    this.assignTutorDisplay = false;
  }

  showAssignStudentsModal() {
    this.getStudents();
    this.assignStudentsDisplay = true;
  }

  showAssignTutorModal() {
    this.getAcademicTutors();
    this.assignTutorDisplay = true;
  }

  hiddenAssignStudentsModal() {
    this.assignStudentsDisplay = false;
  }

  hiddenUnassingStudentModal(student: Student) {
    this.confirmationService.confirm({
      message: `¿Está seguro de desasignar ${student.fullName}?`,
      accept: () => {
        this.putUnassingStudents(student);
      },
      acceptLabel: 'Si, Desasignar',
      rejectLabel: 'No, Cancelar',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-primary',
    });
  }

  putUnassingStudents(student: Student) {
    this.studentsService
      .putUnassingStudents(student)
      .subscribe({
        next: () => {
          this.toastrService.showSuccess('Estudiante eliminado del proyecto correctamente');
          this.project.students = this.project.students.filter((s) => s.id !== student.id);
        },
      });
  }

  saveAssignment() {
    if (this.studentsSelected.length === 0) {
      this.toastrService.showError('Debe seleccionar al menos un estudiante');
      return;
    }
    this.studentsService
      .putAssignStudentsToProject(this.idProject, this.studentsSelected)
      .subscribe({
        next: () => {
          this.assignStudentsDisplay = false;
          this.hidden();
          this.toastrService.showSuccess('Estudiantes asignados correctamente');
        },
      });
  }
  saveTutorAssignment() {
    if (!this.tutorSelected) {
      this.toastrService.showError('Debe seleccionar un tutor');
      return;
    }
    this.projectService
      .putAssignTutorToProject(this.idProject, this.tutorSelected)
      .subscribe({
        next: () => {
          this.assignTutorDisplay = false;
          this.hidden();
          this.toastrService.showSuccess('Tutor asignado correctamente');
        },
      });
  }

  getStudents() {
    this.studentsService
      .getStudentsWithoutProjects(this.authService.company.id)
      .subscribe({
        next: (students) => {
          this.studentsOptions = students;
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }

  getAcademicTutors() {
    const careerId = this.authService.career.id;
    this.tutorService.getListTutorAcademic(careerId, {page: 0, limit: 100})
      .subscribe(
        (res) => {
          this.tutorOptions = res.map((tutor) => {
            return {
              ...tutor,
              completeName: tutor.firstName + ' ' + tutor.lastName,
            };
          });
          console.log(this.tutorOptions);
        }
      )
  }
}
