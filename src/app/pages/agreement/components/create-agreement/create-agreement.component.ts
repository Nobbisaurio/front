import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ListAgreement} from '../../models/list-agreement';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AgreementService} from '../../service/agreement.service';
import {ToastrService} from '@app/shared/services/toastr.service';
import {UploadFileService} from '@app/shared/services/upload-file.service';
import {AgreementCompany} from "@pages/agreement/models/agreement-company";
import { FileUpload } from 'primeng/fileupload';

@Component({
    selector: 'app-create-agreement',
    templateUrl: './create-agreement.component.html',
    styleUrls: ['./create-agreement.component.scss']
})
export class CreateAgreementComponent implements OnInit {
    @ViewChild('fileUpload') fileUpload: FileUpload;
    loading: boolean = false;
    agreementStatusOptions: string[] = ['ACTIVO', 'INACTIVO', 'PENDIENTE'];
    @Input() displayAgreement: boolean = false;
    @Input() idCompany!: number;
    @Input() agreement!: AgreementCompany;
    @Output() closeModal = new EventEmitter<boolean>();


    formAgreement!: FormGroup;

    hasData: boolean = false;

    constructor(
        private agreementService: AgreementService,
        private fb: FormBuilder,
        private toastrService: ToastrService,
        private uploadFileService: UploadFileService,
    ) {
    }

    ngOnInit(): void {

        this.formAgreement = this.fb.group({
            code: ['', [Validators.required, Validators.minLength(3)]],
            dateStart: ['', [Validators.required, Validators.minLength(3)]],
            dateEnd: ['', [Validators.required, Validators.minLength(3)]],
            itvPath: ['', [Validators.required, Validators.minLength(3)]],
            agreementPath: [''],
            status: ['', [Validators.required]],
        });
        if (this.agreement) {
            console.log(this.agreement)
            this.formAgreement.patchValue({
                code: this.agreement.code,
                dateStart: new Date(this.agreement.dateStart),
                dateEnd: new Date(this.agreement.dateEnd),
                status: this.agreement.status,
                itvPath: this.agreement.itvPath,
                agreementPath: this.agreement.agreementPath,
            });
        }
    }

    saveAgreement() {
        const isUpdate = !!this.agreement;
        const {dateStart, dateEnd} = this.formAgreement.value;
        const dateStartFormatted = new Date(dateStart);
        const dateEndFormatted = new Date(dateEnd);
        if (dateStartFormatted > dateEndFormatted) {
            console.log(dateStartFormatted, dateEndFormatted)
            this.toastrService.showError('La fecha de inicio no puede ser mayor a la fecha de fin');
            return;
        }
        if (isUpdate) {
            const data: ListAgreement = {
                id: this.agreement!.id,
                ...this.formAgreement.value
            };

            this.agreementService
                .putUpdateAgreement(data)
                .subscribe({
                    next: () => {
                        this.toastrService.showSuccess('Convenio actualizado correctamente');
                        this.hiddenModal();
                    }
                });
        } else {
            const data: ListAgreement = {
                ...this.formAgreement.value,
                idCompany: this.idCompany
            };


            this.agreementService
                .postCreateAgreement(data)
                .subscribe({
                    next: () => {
                        this.toastrService.showSuccess('Convenio creado exitosamente');
                        this.hiddenModal();
                    }
                });
        }
    }

    get f(): { [key: string]: AbstractControl } {
        return this.formAgreement.controls;
    }

    hiddenModal() {
        this.closeModal.emit(false);
        this.agreement = null;
        this.displayAgreement = false;
        this.hasData = false;
    }


    onUploadItv(event: any) {
        const file = event.files[0];
        this.uploadFileService.uploadFile(file).subscribe({
            next: (res) => {
                this.formAgreement.patchValue({
                    itvPath: res?.path
                });
                this.toastrService.showSuccess('Archivo subido correctamente');
                console.log(res);
                this.fileUpload.clear();

            },
            error: () => {
                this.fileUpload.clear();

            }
            

        });

    }

    onUploadAgreement(event: any) {
        const file = event.files[0];
        this.uploadFileService.uploadFile(file).subscribe({
            next: (res) => {
                this.formAgreement.patchValue({
                    agreementPath: res?.path
                });
                console.log(res);
                this.toastrService.showSuccess('Archivo subido correctamente');
                this.fileUpload.clear();
            },
            error: () => {
                this.fileUpload.clear();

            }
        });
    }


}
