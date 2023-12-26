import {Component, OnInit} from '@angular/core';
import {ListTutor} from '../../models/list-tutor';
import {TutorService} from '../../service/tutor.service';
import {ConfirmationService} from 'primeng/api';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from '@app/shared/services/toastr.service';
import {AuthService} from "@app/auth/servicies/auth.service";
import {rolEnum} from "@core/enum/rol.enum";
import {ListTutorAcademic} from "@pages/tutor/models/list-tutor-academic";
import {CreateTutorAcademic, CreateTutorBusiness} from "@pages/tutor/models/create-tutor";

@Component({
  selector: 'app-list-tutor',
  templateUrl: './list-tutor.component.html',
  styleUrls: ['./list-tutor.component.scss']
})
export class ListTutorComponent implements OnInit {
  loading: boolean = false;
  selected: ListTutor | null = null;
  tutor: ListTutorAcademic[] = [];
  formTutor!: FormGroup;
  formSearch!: FormGroup;
  displayDetail: boolean = false;
  hasData: boolean = false;
  idCareerOrCompany: number;
  isAcademic: boolean = false;

  constructor(
    private tutorService: TutorService,
    private confirmationService: ConfirmationService,
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.formTutor = this.fb.group({
      dni: ['', [Validators.required, Validators.minLength(3)]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.email]],
    });

    this.formSearch = this.fb.group({
      identification: [''],
      name: ['',],
      email: ['', [Validators.email]],
    });
    this.search()

  }
  //
  // downloadFile() {
  //   this.uploadService.downloadFile('docs/nn9gdrzle0m1689401515486.pdf')
  //     .subscribe((response) => {
  //       const path = window.URL.createObjectURL(new Blob([response], {type: 'application/pdf'}));
  //       window.open(path);
  //     });
  // }

  search() {
    if (this.authService.currentUserValue.rol.code === rolEnum.ADMIN) {
      this.getTutor();
    }
    this.isAcademic = this.authService.currentUserValue.rol.code === rolEnum.CA;
    if (this.isAcademic) {
      this.idCareerOrCompany = this.authService.career.id;
      this.getTutorsAcademic();
    } else {
      this.idCareerOrCompany = this.authService.company.id;
      this.getTutorsBusiness();
    }
  }

  confirm(tutor: ListTutor) {
    this.confirmationService.confirm({
      message: `¿Está seguro de eliminar ${tutor.firstName}?`,
      accept: () => {
        this.deleteTutor(tutor);
      },
      acceptLabel: 'Si, Eliminar',
      rejectLabel: 'No, Cancelar',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-primary'
    });
  }

  deleteTutor(channelDelete: ListTutor) {
    this.tutorService
      .deleteTutor(channelDelete)
      .subscribe({
        next: () => {
          this.toastrService.showSuccess('Tutor eliminado correctamente');
          this.tutor = this.tutor.filter((tutor) => tutor.id !== channelDelete.id);
        }
      });
  }

  openModelCreate() {
    this.formTutor.reset();
    this.formTutor.enable();
    this.displayDetail = true;
    this.hasData = false;
  }

  openModalDetail(tutor: ListTutor) {
    this.selected = tutor;
    this.formTutor.patchValue({
      ...tutor
    });
    this.formTutor.disable();
    this.displayDetail = true;
    this.hasData = true;
  }

  editTutor() {
    this.formTutor.enable();
    this.formTutor.controls['dni'].disable();
    this.formTutor.controls['email'].disable();
    this.hasData = false;
  }

  cancelEdit() {
    this.formTutor.disable();
    this.hasData = true;
  }

  saveTutor() {
    if (this.isAcademic) this.saveTutorAcademic(); else this.saveTutorBusiness();
  }

  saveTutorAcademic() {
    const isUpdate = !!this.selected;
    if (isUpdate) {
      const data: ListTutor = {
        id: this.selected!.id,
        ...this.formTutor.value
      };
      this.tutorService
        .putUpdateTutor(data)
        .subscribe({
          next: (res) => {
            this.toastrService.showSuccess('Tutor actualizado correctamente');
            const rootIndex = this.tutor.findIndex((root) => root.id === this.selected!.id);
            this.tutor[rootIndex] = data;
            this.hiddenModalDetail();
          }
        });
    } else {
      const data: CreateTutorAcademic = {
        ...this.formTutor.value,
        idCareer: this.idCareerOrCompany
      };
      this.tutorService
        .postCreateTutorAcademic(data)
        .subscribe({
          next: (data) => {
            this.toastrService.showSuccess('Tutor creado exitosamente');
            this.tutor.push(data);
            this.hiddenModalDetail();
          }
        });
    }
  }

  saveTutorBusiness() {
    const isUpdate = !!this.selected;
    if (isUpdate) {
      const data: ListTutor = {
        id: this.selected!.id,
        ...this.formTutor.value
      };
      this.tutorService
        .putUpdateTutor(data)
        .subscribe({
          next: (res) => {
            this.toastrService.showSuccess('Tutor actualizado correctamente');
            const rootIndex = this.tutor.findIndex((root) => root.id === this.selected!.id);
            this.tutor[rootIndex] = data;
            this.hiddenModalDetail();
          }
        });
    } else {
      const data: CreateTutorBusiness = {
        ...this.formTutor.value,
        idCompany: this.idCareerOrCompany
      };
      this.tutorService
        .postCreateTutorBusiness(data)
        .subscribe({
          next: (data) => {
            this.toastrService.showSuccess('Tutor creado exitosamente');
            this.tutor.push(data);
            this.hiddenModalDetail();
          }
        });
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formTutor.controls;
  }

  hiddenModalDetail() {
    this.selected = null;
    this.displayDetail = false;
    this.hasData = false;
  }

  getTutor() {
    this.loading = true
    this.tutorService.getListTutor()
      .subscribe({
        next: (data) => {
          this.tutor = data;
          this.loading = false;
        }, error: (err) => {
          this.loading = false;
        }
      })

  }

  getTutorsAcademic() {
    this.loading = true
    const {identification, name, email} = this.formSearch.value;
    this.tutorService.getListTutorAcademic(this.idCareerOrCompany, {
      identification,
      name,
      email,
      page: 0,
      limit: 0
    })
      .subscribe({
        next: (data) => {
          this.tutor = data;
          this.loading = false;
        }, error: () => {
          this.loading = false;
        }
      })
  }

  getTutorsBusiness() {
    this.loading = true;
    const {identification, name, email} = this.formSearch.value;
    this.tutorService.getListTutorBusiness(this.idCareerOrCompany, {
      identification,
      name,
      email,
      page: 0,
      limit: 0
    })
      .subscribe({
        next: (data) => {
          this.tutor = data;
          this.loading = false;
        }, error: (err) => {
          this.loading = false;
        }
      })
  }

}
