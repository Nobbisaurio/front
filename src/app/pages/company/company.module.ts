import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RippleModule } from "primeng/ripple";
import { CardModule } from "primeng/card";
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import {FieldsetModule} from 'primeng/fieldset';
import { CompanyRoutingModule } from './company-routing.module';
import { ListCompanyComponent } from './components/list-company/list-company.component';
import { ProfileCompanyComponent } from './components/profile-company/profile-company.component';
import { CreateAgreementComponent } from '../agreement/components/create-agreement/create-agreement.component';
import { AgreementModule } from '../agreement/agreement.module';
import { KeyFilterModule } from 'primeng/keyfilter';



@NgModule({
  declarations: [
    ListCompanyComponent,
    ProfileCompanyComponent,

],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    TableModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RippleModule,
    CardModule,
    InputTextModule,
    ConfirmDialogModule,
    DialogModule,
    FileUploadModule,
    DropdownModule,
    FieldsetModule,
    AgreementModule,
    KeyFilterModule

  ],
  providers: [
    ConfirmationService
  ]
})
export class CompanyModule{ }
