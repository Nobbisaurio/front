import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Agreement, Company } from '@app/pages/company/models/user-company';
import { AgreementService } from '../../service/agreement.service';
import { AgreementCompany } from '../../models/agreement-company';
import { ListCompany } from '@app/pages/company/models/list-company';

@Component({
  selector: 'app-profile-agreement',
  templateUrl: './profile-agreement.component.html',
  styleUrls: ['./profile-agreement.component.scss']
})
export class ProfileAgreementComponent implements OnInit {
  @Input()display = false;
  @Input() idAgreement!: number;
  agreement!: AgreementCompany;
  company!: Company;
  @Output() closeModal = new EventEmitter<Agreement>();
  @Output() editAgreement = new EventEmitter<AgreementCompany>();
  selected: ListCompany;
  displayAgreement: boolean;
  hasData: boolean = false;
  constructor(
    private agreementService: AgreementService,
    ) { }

  ngOnInit() {
    this.agreementService.getAgreementProfile(this.idAgreement).subscribe({
      next: (agreement: AgreementCompany) => {
        this.agreement = agreement;
      },
      error: (err: any) => {
        console.log(err);
        this.hidden();
      },
    });
  }

  hidden() {
    this.closeModal.emit(null);
  }

  hiddenModalWithAgreement() {
    this.editAgreement.emit(this.agreement);
  }

  openModalAgreement() {
    this.displayAgreement = true;
  }

  downLoadFile(name: string){
    this.agreementService.downloadFile(name).subscribe({
      next: (data: Blob) => {
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

}
