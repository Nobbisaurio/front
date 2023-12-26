import {Component, OnInit, ViewChild} from '@angular/core';
import {ListStudents} from '../../models/list-students';
import {StudentsService} from '../../service/students.service';
import {ConfirmationService, LazyLoadEvent} from 'primeng/api';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from '@app/shared/services/toastr.service';
import {TypeDNI} from '@app/core/enum/typeDni.enum';
import {StatusStudent} from "@core/enum/statusStudent.enum";
import {CreateStudents} from "@pages/students/models/create-students";
import {UserStudent} from "@pages/students/models/user-student";
import {RootAppService} from "@shared/services/root-app.service";
import {CareerService} from "@pages/career/service/career.service";
import {AuthService} from "@app/auth/servicies/auth.service";
import {PaginationOptions} from "@core/models/pagination-model";
import {rolEnum} from "@core/enum/rol.enum";
import {FileUpload} from "primeng/fileupload";

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss'],
})
export class ListStudentsComponent implements OnInit {
  @ViewChild('fileUpload') fileUpload: FileUpload;
  loading: boolean = false;
  selected!: ListStudents;
  studentToUpdate!: UserStudent;
  students: ListStudents[] = [];
  totalRecords: number = 0;
  rows: number = 10;
  formStudents!: FormGroup;
  displayDetail = false;
  displayProfile = false;
  displayStudent: boolean = false;
  hasData: boolean = false;
  typeDni: string[] = [];
  emailDomain: string = '@yavirac.edu.ec';
  parallelOptions: string[] = ['A', 'B', 'C', 'D', 'E'];
  academicPeriodOptions: string[] = [
    'PRIMERO',
    'SEGUNDO',
    'TERCERO',
    'CUARTO',
    'QUINTO',
    'SEXTO',
  ];
  statusStudent: string[] = [];
  careerOptions: { id: number; name: string }[] = [];
  formSearch!: FormGroup;

  constructor(
    private studentsService: StudentsService,
    private confirmationService: ConfirmationService,
    private fb: FormBuilder,
    private toastrService: ToastrService,
    public rootAppService: RootAppService,
    private careerService: CareerService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.typeDni = Object.values(TypeDNI);
    this.statusStudent = Object.values(StatusStudent);
    this.formStudents = this.fb.group({
      typeDni: ['', Validators.required],
      dni: ['', [Validators.required, Validators.minLength(10)]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      secondName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      secondLastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required]],
      idCareer: [null],
      electivePeriod: ['', [Validators.required, Validators.minLength(4)]],
      academicPeriod: ['', [Validators.required, Validators.minLength(4)]],
      parallel: ['', [Validators.required]],
      status: ['', [Validators.required]],
    });

    this.formSearch = this.fb.group({
      identification: [''],
      name: [''],
      email: ['', [Validators.email]],
    });
  }

  confirm(students: ListStudents) {
    this.confirmationService.confirm({
      message: `¿Está seguro de eliminar ${students.completeNames}?`,
      accept: () => {
        this.deleteStudents(students);
      },
      acceptLabel: 'Si, Eliminar',
      rejectLabel: 'No, Cancelar',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-primary',
    });
  }

  deleteStudents(channelDelete: ListStudents) {
    this.studentsService.deleteStudents(channelDelete).subscribe({
      next: () => {
        this.toastrService.showSuccess('Estudiante eliminado correctamente');
        this.students = this.students.filter(
          (students) => students.id !== channelDelete.id
        );
      },
    });
  }

  search(pagination?: LazyLoadEvent) {
    this.loading = true;
    const options: PaginationOptions = {
      ...this.formSearch.value,
      page: pagination?.first ?? 0,
      limit: this.rows,
    };

    if (this.authService.rol.code === rolEnum.ADMIN) {
      this.getStudents(options);
      this.formStudents.get('idCareer')?.setValidators([Validators.required]);
      return;
    }

    if (
      this.authService.rol.code === rolEnum.CE ||
      this.authService.rol.code === rolEnum.TE
    ) {
      this.getStudentsByCompany(options);
      return;
    }

    if (
      this.authService.rol.code === rolEnum.CA ||
      this.authService.rol.code === rolEnum.TA
    ) {
      this.getStudentsByCareer(options);
      return;
    }
  }

  getStudents(options: PaginationOptions) {
    this.studentsService.postAllStudents(options).subscribe({
      next: (response) => {
        this.students = response.results;
        this.totalRecords = response.total;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  getStudentsByCompany(options: PaginationOptions) {
    this.studentsService
      .postStudentByCompany(this.authService.company.id, options)
      .subscribe({
        next: (response) => {
          this.students = response.results;
          this.totalRecords = response.total;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        },
      });
  }

  getStudentsByCareer(options: PaginationOptions) {
    this.studentsService
      .getListStudents(this.authService.career.id, options)
      .subscribe({
        next: (response) => {
          this.students = response.results;
          this.totalRecords = response.total;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        },
      });
  }

  openModelCreate() {
    this.formStudents.reset();
    this.formStudents.enable();
    if (this.authService.rol.code !== rolEnum.CA && this.authService.rol.code !== rolEnum.TA) {
      this.getCareers();
    }
    this.displayDetail = true;
    this.hasData = false;
  }

  openModalProfile(students: ListStudents) {
    this.selected = students;
    this.displayProfile = true;
  }

  hiddenProfile() {
    this.displayProfile = false;
  }

  hiddenModalWithStudent(e: any) {
    this.displayProfile = false;
    this.displayStudent = true;
    this.selected = e;
    this.openModalDetail(e);
  }

  openModalDetail(student: UserStudent) {
    this.studentToUpdate = student;
    this.formStudents.patchValue({
      ...student,
      typeDni: TypeDNI.CEDULA,
      email: student.email.split('@')[0],
    });
    if (this.authService.rol.code === rolEnum.ADMIN) {
      this.getCareers();
    }
    this.formStudents.disable();
    this.displayDetail = true;
    this.hasData = true;
  }

  editStudents() {
    this.formStudents.enable();
    this.formStudents.controls['typeDni'].disable();
    this.formStudents.controls['dni'].disable();
    this.formStudents.controls['email'].disable();
    this.hasData = false;
  }

  cancelEdit() {
    this.formStudents.disable();
    this.hasData = true;
  }

  uploadFile(event: any) {
    const file = event.files[0];
    this.studentsService.uploadStudents(file)
      .subscribe({
        next: () => {
          this.toastrService.showSuccess('Estudiantes cargados correctamente');
          this.search({first: 0, rows: this.rows});
          this.fileUpload.clear();
        },
        error: () => {
          this.fileUpload.clear();
        }
      })
  }

  saveStudents() {
    const isUpdate = this.selected;
    let idCareer = 0;
    if (this.authService.rol.code === rolEnum.ADMIN) {
      idCareer = this.formStudents.value.idCareer;
    }

    if (this.authService.rol.code === rolEnum.CE || this.authService.rol.code === rolEnum.CA) {
      idCareer = this.authService.career.id;
    }


    if (isUpdate) {
      const dataForm = this.formStudents.value;
      const dataUpdate: CreateStudents = {
        ...dataForm,
        id: this.studentToUpdate.id,
        email: `${dataForm.dni}${this.emailDomain}`,
        idCareer
      };
      this.studentsService
        .putUpdateStudents(dataUpdate, this.studentToUpdate.id)
        .subscribe({
          next: (data) => {
            this.toastrService.showSuccess('Estudiante actualizado exitosamente');
            console.log(data);
            this.search({first: 0, rows: this.rows});
            this.hiddenModalDetail();
          }
        });
    } else {
      const dataForm = this.formStudents.value;
      const dataCreate: CreateStudents = {
        ...dataForm,
        email: `${dataForm.dni}${this.emailDomain}`,
        idCareer
      };
      this.studentsService
        .postCreateStudents(dataCreate)
        .subscribe({
          next: (data) => {
            this.toastrService.showSuccess('Estudiante creado exitosamente');
            console.log(data);
            this.search({first: 0, rows: this.rows});
            this.hiddenModalDetail();
          }
        });
    }

  }

  get f(): { [key: string]: AbstractControl } {
    return this.formStudents.controls;
  }

  hiddenModalDetail() {
    this.displayDetail = false;
    this.hasData = false;
  }

  getCareers() {
    this.careerService.postListCareer({page: 0, limit: 100})
      .subscribe({
        next: (data) => {
          this.careerOptions = data.results.map((career) => {
            return {
              id: career.id,
              name: career.name
            }
          });
        }
      })
  }

}
