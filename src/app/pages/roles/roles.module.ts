import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesRoutingModule } from './roles-routing.module';
import { ListRolesComponent } from './components/list-roles/list-roles.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RippleModule} from "primeng/ripple";
import {CardModule} from "primeng/card";
import {InputTextModule } from 'primeng/inputtext';
import {ConfirmationService } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {CheckboxModule} from "primeng/checkbox";
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [
    ListRolesComponent,
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    TableModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RippleModule,
    CardModule,
    InputTextModule,
    ConfirmDialogModule,
    DialogModule,
    CheckboxModule,
    CalendarModule
  ],
  providers: [
    ConfirmationService
  ]
})
export class RolesModule { }
