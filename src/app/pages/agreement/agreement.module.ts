import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAgreementComponent } from './components/list-agreement/list-agreement.component';
import { AgreementRoutingModule } from './agreement-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { CreateAgreementComponent } from './components/create-agreement/create-agreement.component';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { ProfileAgreementComponent } from './components/profile-agreement/profile-agreement.component';
import { FieldsetModule } from 'primeng/fieldset';



@NgModule({
  declarations: [
    ListAgreementComponent,
    CreateAgreementComponent,
    ProfileAgreementComponent,
  ],
  imports: [
    CommonModule,
    AgreementRoutingModule,
    TableModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RippleModule,
    CardModule,
    InputTextModule,
    ConfirmDialogModule,
    DialogModule,
    CalendarModule,
    DropdownModule,
    FileUploadModule, 
    FieldsetModule
  ],
  exports: [
    CreateAgreementComponent 
  ]
})
export class AgreementModule { }
