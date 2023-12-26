import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Company} from '../../models/user-company';
import {CompanyService} from '@pages/company/service/company.service';

@Component({
  selector: 'app-profile-company',
  templateUrl: './profile-company.component.html',
  styleUrls: ['./profile-company.component.scss'],
})
export class ProfileCompanyComponent implements OnInit {
  @Input() idCompany!: number;
  @Input() display = false;
  @Output() closeModal = new EventEmitter<Company>();
  @Output() editCompany = new EventEmitter<Company>();
  company!: Company;

  constructor(private companyService: CompanyService) {
  }

  ngOnInit() {
    this.companyService.getCompanyProfile(this.idCompany).subscribe({
      next: (company: Company) => {
        this.company = company;
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

  hiddenModalWithCompany() {
    this.editCompany.emit(this.company);
  }

}
