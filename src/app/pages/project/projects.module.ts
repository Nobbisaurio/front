import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ConfirmationService } from "primeng/api";
import { CardModule } from "primeng/card";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import { FieldsetModule } from "primeng/fieldset";
import { FileUploadModule } from "primeng/fileupload";
import { InputTextModule } from "primeng/inputtext";
import { RippleModule } from "primeng/ripple";
import { TableModule } from "primeng/table";
import { ListProjectComponent } from "./components/list-project/list-project.component";
import { ProjectsRoutingModule } from "./projects-routing.module";
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from "primeng/calendar";
import { ProfileProjectComponent } from "./components/profile-project/profile-project.component";
import {ListboxModule} from 'primeng/listbox';
import { PickListModule } from "primeng/picklist";
import { AssignamentProjectComponent } from "./components/assignament-project/assignament-project.component";
import {OrderListModule} from 'primeng/orderlist';
import { DividerModule } from "primeng/divider";
import {PanelModule} from 'primeng/panel';
import {AuthModule} from "@app/auth/auth.module";

@NgModule({
  declarations: [
    ListProjectComponent,
    ProfileProjectComponent,
    AssignamentProjectComponent


  ],
    imports: [
        CommonModule,
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
        ProjectsRoutingModule,
        InputTextareaModule,
        MultiSelectModule,
        CalendarModule,
        ListboxModule,
        PickListModule,
        ListboxModule,
        OrderListModule,
        DividerModule,
        PanelModule,
        AuthModule,
        MultiSelectModule


    ],
  providers: [
    ConfirmationService
  ]
})
export class ProjectsModule { }
