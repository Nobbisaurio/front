import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionsRoutingModule } from './permissions-routing.module';
import { ListPermissionsComponent } from './components/list-permissions/list-permissions.component';
import { ButtonModule } from 'primeng/button';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RippleModule} from "primeng/ripple";
import {CardModule} from "primeng/card";
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmationService } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';




@NgModule({
  declarations: [
    ListPermissionsComponent,

  ],
  imports: [
    CommonModule,
    PermissionsRoutingModule,
    TableModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RippleModule,
    CardModule,
    InputTextModule,
    ConfirmDialogModule,
    DialogModule
  ],
  providers: [
    ConfirmationService
  ]
})
export class PermissionsModule { }
