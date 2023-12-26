import {Component, OnInit} from '@angular/core';
import {ListCompany} from '../../models/list-company';
import {CompanyService} from '../../service/company.service';
import {ConfirmationService, LazyLoadEvent} from 'primeng/api';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from '@app/shared/services/toastr.service';
import {StatusCompany} from "@core/enum/statusCompany.enum";
import {CreateCompany} from "@pages/company/models/create-company";
import { ListAgreement } from '@app/pages/agreement/models/list-agreement';
import { AuthService } from '@app/auth/servicies/auth.service';


@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.scss']
})
export class ListCompanyComponent implements OnInit {

  loading: boolean = false;
  selected: ListCompany;
  company: ListCompany [] = [];
  agreement: ListAgreement[] = [];
  totalRecords: number = 0;
  rows: number = 10;
  formCompany!: FormGroup;
  formAgreement!: FormGroup;
  displayAgreement: boolean = false;
  displayCompany: boolean = false;
  displayDetail: boolean = false;
  displayProfile = false;
  hasData: boolean = false;
  statusCompany: string [] = [];
  formSearch!: FormGroup;


  constructor(
    private companyService: CompanyService,
    private confirmationService: ConfirmationService,
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private authService: AuthService,


  ) {
  }

  ngOnInit(): void {

    this.statusCompany = Object.values(StatusCompany);

    this.formCompany = this.fb.group({
      ruc: ['', [Validators.required, Validators.minLength(10)]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      dniRepresentLegal: ['', [Validators.required, Validators.minLength(10)]],
      nameRepresentLegal: ['', [Validators.required, Validators.minLength(3)]],
      lastNameRepresentLegal: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      address: ['', [Validators.required, Validators.minLength(3)]],
      status: ['', [Validators.required]],
      idCareer: [this.authService.currentUserValue.tutor.career.id],

    });

    this.formAgreement = this.fb.group({
      code: ['', [Validators.required, Validators.minLength(3)]],
      dateStart: ['', [Validators.required, Validators.minLength(3)]],
      dateEnd: ['', [Validators.required, Validators.minLength(3)]],
      status: ['', [Validators.required, Validators.minLength(3)]],
      itvPath: ['', [Validators.required, Validators.minLength(3)]],
      agreementPath: ['', [Validators.required, Validators.minLength(3)]],
      IdCompany: [1],
    });

    this.formSearch = this.fb.group({
      identification: [''],
      name: ['', ],
      email: ['', [Validators.email]],
    });
  }

  confirm(company: ListCompany) {
    this.confirmationService.confirm({
      message: `¿Está seguro de eliminar ${company.name}?`,
      accept: () => {
        this.deleteCompany(company);
      },
      acceptLabel: 'Si, Eliminar',
      rejectLabel: 'No, Cancelar',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-primary'
    });
  }

  deleteCompany(channelDelete: ListCompany) {
    this.companyService
      .deleteCompany(channelDelete)
      .subscribe({
        next: () => {
          this.toastrService.showSuccess('Empresa eliminada correctamente');
          this.company = this.company.filter((company) => company.id !== channelDelete.id);
        }
      });
  }

  search(pagination?:LazyLoadEvent) {
    const idCareer = this.authService.career.id;
    const {identification, name, email} = this.formSearch.value;
    this.loading = true;
    this.companyService.getListCompany(idCareer,{
      email,
      identification,
      name,
      page: pagination?.first ?? 0,
      limit: this.rows
    }).subscribe({
      next: (response) => {
        this.company = response.results;
        this.totalRecords = response.total;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    })
  }

  openModelCreate() {
    this.formCompany.reset();
    this.formCompany.enable();

    this.displayDetail = true;
    this.hasData = false;
  }

  openModalProfile(company: ListCompany) {
    this.selected = company;
    this.displayProfile = true;
  }


  openModalAgreement(company: ListCompany) {
    this.selected = company;
    this.displayAgreement = true;
  }

  hiddenProfile() {
    this.displayProfile = false;
  }

  hiddenModalWithCompany(e:any)  {
    this.displayProfile = false;
    this.displayCompany = true;
    this.selected = e;
    this.openModalDetail(this.selected);
  }


  hiddenAgreement() {
    this.displayAgreement = false;
  }

  openModalDetail(company: ListCompany) {
    this.selected = company;
    this.formCompany.patchValue({
      ...company
    });

    this.formCompany.disable();
    this.displayDetail = true;
    this.hasData = true;
  }

  editCompany() {
    this.formCompany.enable();
    this.formCompany.controls['ruc'].disable();
    this.formCompany.controls['email'].disable();
    this.hasData = false;
  }

  cancelEdit() {
    this.formCompany.disable();
    this.hasData = true;
  }

  saveCompany() {
    console.log(this.selected)
    const isUpdate = !!this.selected;
    if (isUpdate) {
      const data: ListCompany = {
        id: this.selected!.id,
        ...this.formCompany.value,
        ruc: this.selected!.ruc,
        email: this.selected!.email,
      };
      console.log(data)
      this.companyService
        .putUpdateCompany(data)
        .subscribe({
          next: () => {
            this.toastrService.showSuccess('Empresa actualizada correctamente');
            const companyIndex = this.company.findIndex((company) => company.id === this.selected!.id);
            this.company[companyIndex] = data;
            this.hiddenModalDetail();
          }
        });
    } else {
      const dataForm = this.formCompany.value;
      const dataCreate: CreateCompany = {
        ...dataForm,
        idCareer: this.authService.currentUserValue.tutor.career.id
      };
      this.companyService
        .postCreateCompany(dataCreate)
        .subscribe({
          next: (data) => {
            this.toastrService.showSuccess('Empresa creado exitosamente');
            console.log(data);
            this.search({first: 0, rows: this.rows});
            this.hiddenModalDetail();

          }
        });
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formCompany.controls;
  }

  hiddenModalDetail() {
    this.selected = null;
    this.displayDetail = false;
    this.hasData = false;
  }

}

