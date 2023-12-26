import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCareerComponent } from './components/list-career/list-career.component';
import { TableModule } from 'primeng/table';
import { CareerRoutingModule } from './career-routing.module';
import {ButtonModule } from 'primeng/button';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RippleModule} from "primeng/ripple";
import {CardModule} from "primeng/card";
import {InputTextModule } from 'primeng/inputtext';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {FileUploadModule} from "primeng/fileupload";
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { CalendarModule } from 'primeng/calendar';
import {KeyFilterModule} from "primeng/keyfilter";





@NgModule({
  declarations: [
    ListCareerComponent
  ],
    imports: [
        CommonModule,
        CommonModule,
        CareerRoutingModule,
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
        CalendarModule,
        KeyFilterModule

    ]
})
export class CareerModule { }
