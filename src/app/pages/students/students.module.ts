import {TableModule} from 'primeng/table';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentsRoutingModule} from './students-routing.module';
import {ListStudentsComponent} from './components/list-students/list-students.component';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RippleModule} from "primeng/ripple";
import {CardModule} from "primeng/card";
import {InputTextModule} from 'primeng/inputtext';
import {ConfirmationService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {FileUploadModule} from 'primeng/fileupload';
import {ProfileStudentComponent} from './components/profile-student/profile-student.component';
import {FieldsetModule} from 'primeng/fieldset';
import {AuthModule} from "@app/auth/auth.module";
import {PickListModule} from "primeng/picklist";
import {AssignamentStudentComponent} from './components/assignament-student/assignament-student.component';
import {KeyFilterModule} from 'primeng/keyfilter';



@NgModule({
    declarations: [
        ListStudentsComponent,
        ProfileStudentComponent,
        AssignamentStudentComponent
    ],
    imports: [
        CommonModule,
        StudentsRoutingModule,
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
        AuthModule,
        PickListModule,
        KeyFilterModule,

    ],
    providers: [
        ConfirmationService
    ]
})
export class StudentsModule {
}
