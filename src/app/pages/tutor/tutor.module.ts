import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorRoutingModule } from './tutor-routing.module';
import { ListTutorComponent } from './components/list-tutor/list-tutor.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RippleModule} from "primeng/ripple";
import {CardModule} from "primeng/card";
import { InputTextModule } from 'primeng/inputtext';
import {ConfirmationService } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import { FieldsetModule } from 'primeng/fieldset';
import {KeyFilterModule} from "primeng/keyfilter";




@NgModule({
  declarations: [
    ListTutorComponent,

  ],
    imports: [
        CommonModule,
        TutorRoutingModule,
        TableModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule,
        RippleModule,
        CardModule,
        InputTextModule,
        ConfirmDialogModule,
        DialogModule,
        FieldsetModule,
        KeyFilterModule,
    ],
  providers: [
    ConfirmationService
  ]
})
export class TutorModule { }
