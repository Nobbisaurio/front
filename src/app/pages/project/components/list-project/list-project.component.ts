import {Component, OnInit} from '@angular/core';
import {ListProjects} from '../../models/list-projects';
import {ProjectsService} from '../../service/projects.service';
import {ConfirmationService, LazyLoadEvent} from 'primeng/api';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {ToastrService} from '@app/shared/services/toastr.service';
import {CreateProjects} from '../../models/create-projects';
import {AuthService} from '@app/auth/servicies/auth.service';
import {TutorService} from '@app/pages/tutor/service/tutor.service';
import {ListTutor} from '@app/pages/tutor/models/list-tutor';
import {StatusProject} from '@app/core/enum/statusProject.enum';
import {RootAppService} from '@app/shared/services/root-app.service';
import {EditProject} from '../../models/edit-project';
import {rolEnum} from "@core/enum/rol.enum";

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss'],
})
export class ListProjectComponent implements OnInit {
  loading: boolean = false;
  selected!: ListProjects;
  projects: ListProjects[] = [];
  totalRecords: number = 0;
  rows: number = 10;
  formProjects!: FormGroup;
  displayDetail = false;
  displayProfile = false;
  displayProjects: boolean = false;
  hasData: boolean = false;
  statusProject: string[] = [];
  tutorBusinessOptions: ListTutor[] = [];
  formSearch!: FormGroup;

  constructor(
    private projectsService: ProjectsService,
    private confirmationService: ConfirmationService,
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private authService: AuthService,
    public rootAppService: RootAppService,
    private tutorService: TutorService,
  ) {
  }

  ngOnInit(): void {
    this.statusProject = Object.values(StatusProject);
    this.formProjects = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      idBusinessTutor: [this.authService.currentUserValue?.tutor?.id],
      status: ['', [Validators.required]],
    });

    this.formSearch = this.fb.group({
      name: [''],
      academicTutor: [''],
      businessTutor: [''],
      company: [''],
    });
  }

  confirm(projects: ListProjects) {
    this.confirmationService.confirm({
      message: `¿Está seguro de eliminar ${projects.name}?`,
      accept: () => {
        this.deleteProyects(projects);
      },
      acceptLabel: 'Si, Eliminar',
      rejectLabel: 'No, Cancelar',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-primary',
    });
  }

  deleteProyects(channelDelete: ListProjects) {
    this.projectsService.deleteProjects(channelDelete).subscribe({
      next: () => {
        this.toastrService.showSuccess('Estudiante eliminado correctamente');
        this.projects = this.projects.filter(
          (projects) => projects.id !== channelDelete.id
        );
      },
    });
  }

  search(pagination?: LazyLoadEvent) {
    const idCompany =   this.authService.rol.code === rolEnum.CE || this.authService.rol.code === rolEnum.TE ?  this.authService.company.id : null;
    const {name, academicTutor, businessTutor, company} = this.formSearch.value;
    const idCareer = this.authService.rol.code === rolEnum.CA || this.authService.rol.code === rolEnum.TA ? this.authService.career.id : null;
    this.loading = true;
    this.projectsService
      .postListProjects(idCompany, {
          name,
          academicTutor,
          businessTutor,
          company,
          page: pagination?.first ?? 0,
          limit: this.rows,
        },
        idCareer
      )
      .subscribe({
        next: (response) => {
          this.projects = response.results;
          this.totalRecords = response.total;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        },
      });
  }

  openModelCreate() {
    this.getTutorBusiness(this.authService.company.id);
    this.formProjects.reset();
    this.formProjects.enable();
    this.displayDetail = true;
    this.hasData = false;
  }

  openModalProfile(projects: ListProjects) {
    this.selected = projects;
    this.displayProfile = true;
  }

  hiddenProfile() {
    this.displayProfile = false;
    this.search()
  }

  hiddenModalWithProjects(e: ListProjects) {
    this.displayProfile = false;
    this.displayProjects = true;
    this.selected = e;
  }

  openModalDetail(idProject: number) {
    this.selected = this.projects.find((projects) => projects.id === idProject);
    this.getTutorBusiness(this.authService.company.id);
    this.formProjects.patchValue({
      ...this.selected,
    });
    this.formProjects.disable();
    this.displayDetail = true;
    this.displayProfile = false;
    this.hasData = true;
  }

  editProject() {
    this.formProjects.enable();
    this.hasData = false;
  }

  cancelEdit() {
    this.formProjects.disable();
    this.hasData = true;
  }

  saveProjects() {
    const isUpdate = !!this.selected;
    if (isUpdate) {
      const data: EditProject = {
        id: this.selected!.id,
        ...this.formProjects.value,
      };
      this.projectsService.putUpdateProjects(data).subscribe({
        next: () => {
          this.toastrService.showSuccess('Proyecto actualizado correctamente');
          const rootIndex = this.projects.findIndex(
            (root) => root.id === this.selected!.id
          );
          this.projects[rootIndex] = {...this.selected, ...data};
          this.hiddenModalDetail();
        },
      });
    } else {
      const dataForm = this.formProjects.value;
      const dataCreate: CreateProjects = {
        ...dataForm,
        idCompany: this.authService.currentUserValue.company.id,
      };
      this.projectsService.postCreateProjects(dataCreate).subscribe({
        next: (data) => {
          this.toastrService.showSuccess('Proyecto creado exitosamente');
          console.log(data);
          this.search({first: 0, rows: this.rows});
          this.hiddenModalDetail();
        },
      });
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formProjects.controls;
  }

  hiddenModalDetail() {
    this.selected = null;
    this.displayDetail = false;
    this.hasData = false;
  }

  getTutorBusiness(idCompany: number) {
    this.tutorService.getListTutorBusiness(idCompany, null).subscribe({
      next: (data) => {
        this.tutorBusinessOptions = data.map((tutor) => ({
            completeName: `${tutor.firstName} ${tutor.lastName}`,
            ...tutor,
          })
        );
      },
    });
  }
}
