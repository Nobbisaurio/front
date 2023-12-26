import { Component, OnInit } from '@angular/core';
import { CareerService } from '../../service/career.service';
import { ToastrService } from '@app/shared/services/toastr.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { ListCareer } from '../../models/list-career';
import {UsersService} from "@pages/users/service/users.service";
import {CreateCareer} from "@pages/career/models/create-career";
import { AuthService } from '@app/auth/servicies/auth.service';



@Component({
  selector: 'app-list-career',
  templateUrl: './list-career.component.html',
  styleUrls: ['./list-career.component.scss'],
})
export class ListCareerComponent implements OnInit {
  loading: boolean = false;
  selected: CreateCareer | null = null;
  careers: CreateCareer[] = [];
  formCareer!: FormGroup;
  displayDetail: boolean = false;
  hasData: boolean = false;
  totalRecords: number = 0;
  rows: number = 10;
  coordinatorOptions: { id: number; name: string; }[] = [];

  formSearch: FormGroup;

  constructor(
    private careerService: CareerService,
    private confirmationService: ConfirmationService,
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private userService: UsersService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {


    this.formCareer = this.fb.group({
      code: ['', [Validators.required, Validators.minLength(1)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      dateStart: [new Date(), [Validators.required]],
      dateEnd: [new Date, [Validators.required]],
      timeRenovationAgreement: [0,[Validators.required, Validators.min(1)],],
      idCoordinator: [0, [Validators.required]],
      idViceCoordinator: [0, [Validators.required]],
      idRespStepDual: [0, [Validators.required]],
    });

    this.formSearch = this.fb.group({
      code: [''],
      name: ['', ],
    });
  }
  confirm(career: ListCareer) {
    this.confirmationService.confirm({
      message: `¿Está seguro de eliminar ${career.name}?`,
      accept: () => {
        this.deleteCareer(career);
      },
      acceptLabel: 'Si, Eliminar',
      rejectLabel: 'No, Cancelar',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-primary',
    });
  }
  deleteCareer(channelDelete: ListCareer) {
    this.careerService.deleteCareer(channelDelete).subscribe({
      next: () => {
        this.toastrService.showSuccess('Carrera eliminado correctamente');
        this.careers = this.careers.filter(
          (career) => career.id !== channelDelete.id
        );
      },
    });
  }

  search(pagination?:LazyLoadEvent) {
    const {code, name,} = this.formSearch.value;
    this.loading = true;
    this.careerService.postListCareer({
      code,
      name,
      page: pagination?.first ?? 0,
      limit: this.rows
    }).subscribe({
      next: (response) => {
        this.careers = response.results;
        this.totalRecords = response.total;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    })
  }

  openModelCreate() {
    this.getCoordinators();
    this.formCareer.reset();
    this.formCareer.enable();
    this.displayDetail = true;
    this.hasData = false;
  }

  openModalDetail(career: CreateCareer) {
    this.getCoordinators();
    this.selected = career;
    this.formCareer.patchValue({
      ...career,
      dateStart: new Date(career.dateStart),
      dateEnd: new Date(career.dateEnd),
    });
    this.formCareer.disable();
    this.displayDetail = true;
    this.hasData = true;
  }

  editCareer() {
    this.formCareer.enable();
    this.hasData = false;
  }

  cancelEdit() {
    this.formCareer.disable();
    this.hasData = true;
  }

  saveCareer() {
    const isUpdate = !!this.selected;
    if (isUpdate) {
      const data: CreateCareer = {
        id: this.selected!.id,
        ...this.formCareer.value,
      };
      this.careerService
      .putUpdateCareer(data)
      .subscribe({
        next: () => {
          this.toastrService.showSuccess('Carrera actualizado correctamente');
          const rootIndex = this.careers.findIndex(
            (root) => root.id === this.selected!.id
          );
          this.careers[rootIndex] = data;
          this.hiddenModalDetail();
        },
      });
    } else {
      const dataForm = this.formCareer.value;
      const dataCreate: CreateCareer = {
        ...this.formCareer.value,
        timeRenovationAgreement: +dataForm.timeRenovationAgreement,
      };
      this.careerService
      .postCreateCareer(dataCreate)
      .subscribe({
        next: (data) => {
          this.toastrService.showSuccess('Carrera creado exitosamente');
          this.careers.push(dataCreate);
          this.hiddenModalDetail();
        },
      });
    }
  }
  get f(): { [key: string]: AbstractControl } {
    return this.formCareer.controls;
  }
  hiddenModalDetail() {
    this.selected = null;
    this.displayDetail = false;
    this.hasData = false;
  }


  getCoordinators() {
    this.userService.getUserByRole(2)
      .subscribe({
        next: (data) => {
          this.coordinatorOptions = data.map((user) => ({
            id: user.id,
            name: user.userName
          }))
        }
      })
  }


}
