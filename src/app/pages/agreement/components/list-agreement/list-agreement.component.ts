import {Component, Input, OnInit} from '@angular/core';
import {ListAgreement} from '../../models/list-agreement';
import {AgreementService} from '../../service/agreement.service';
import {ConfirmationService, LazyLoadEvent} from 'primeng/api';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from '@app/shared/services/toastr.service';
import {AuthService} from '@app/auth/servicies/auth.service';
import {AgreementCompany} from "@pages/agreement/models/agreement-company";

@Component({
    selector: 'app-list-agreement',
    templateUrl: './list-agreement.component.html',
    styleUrls: ['./list-agreement.component.scss']
})
export class ListAgreementComponent implements OnInit {
    loading: boolean = false;
    selectedAgreement: AgreementCompany;
    agreement: ListAgreement [] = [];
    totalRecords: number = 0;
    rows: number = 10;
    @Input() idCompany!: number;
    formAgreement!: FormGroup;
    displayAgreement: boolean = false;
    hasData: boolean = false;
    displayProfile: boolean;
    formSearch!: FormGroup;

    constructor(
        private agreementService: AgreementService,
        private confirmationService: ConfirmationService,
        private fb: FormBuilder,
        private toastrService: ToastrService,
        private authService: AuthService,
    ) {
    }

    ngOnInit(): void {

        this.formAgreement = this.fb.group({
            code: ['', [Validators.required, Validators.minLength(3)]],
            dateStart: ['', [Validators.required, Validators.minLength(3)]],
            dateEnd: ['', [Validators.required, Validators.minLength(3)]],
            status: ['', [Validators.required, Validators.minLength(3)]],
            company: ['', [Validators.required, Validators.minLength(3)]],
        });

        this.formSearch = this.fb.group({
            code: [''],
            dateStart: [''],
            dateEnd: [''],
            company: [''],
        });

    }

    confirm(agreement: ListAgreement) {
        this.confirmationService.confirm({
            message: `¿Está seguro de eliminar ${agreement.code}?`,
            accept: () => {
                this.deleteAgreement(agreement);
            },
            acceptLabel: 'Si, Eliminar',
            rejectLabel: 'No, Cancelar',
            acceptButtonStyleClass: 'p-button-danger',
            rejectButtonStyleClass: 'p-button-primary'
        });
    }

    deleteAgreement(channelDelete: ListAgreement) {
        this.agreementService
            .deleteAgreement(channelDelete)
            .subscribe({
                next: () => {
                    this.toastrService.showSuccess('Convenio eliminado correctamente');
                    this.agreement = this.agreement.filter((agreement) => agreement.id !== channelDelete.id);
                }
            });
    }

    search(pagination?: LazyLoadEvent) {

        const idCareer = this.authService.career.id;
        const {code, dateStart, dateEnd, company} = this.formSearch.value;
        this.loading = true;
        this.agreementService.postListAgreement(idCareer, {
            code,
            dateStart,
            dateEnd,
            company,
            page: pagination?.first ?? 0,
            limit: this.rows
        }).subscribe({
            next: (response) => {
                this.agreement = response.results;
                this.totalRecords = response.total;
                this.loading = false;
            },
            error: () => {
                this.loading = false;
            }
        })
    }


    notifyByEmail(id: number) {
        this.agreementService.getnotifyByEmail(id).subscribe({
            next: () => {
                this.toastrService.showSuccess('Correo enviado correctamente');
            }
        });
    }


    openModalProfile(agreement: ListAgreement) {
        this.selectedAgreement = {
            id: agreement.id,
            company: null,
            agreementPath: null,
            code: agreement.code,
            dateStart: null,
            dateEnd: null,
            status: agreement.status,
            itvPath: null,
        };
        this.displayProfile = true;
    }

    hiddenProfile() {
        this.displayProfile = false;
    }

    hiddenModalWithAgreement(e: AgreementCompany) {
        this.displayProfile = false;
        this.displayAgreement = true;
        this.selectedAgreement = e;
    }

    hiddenModalDetail() {
        this.selectedAgreement = null;
        this.displayAgreement = false;
        this.hasData = false;
    }

}
