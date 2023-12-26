import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from './services/toastr.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BadgeModule } from 'primeng/badge';
import { LayoutComponent } from './components/layout/layout.component';
import { CardModule } from 'primeng/card';
import { MenuComponent } from './components/menu/menu.component';
import { MenuModule } from 'primeng/menu';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {InputTextareaModule} from "primeng/inputtextarea";
import {InplaceModule} from 'primeng/inplace';
import {TableModule} from 'primeng/table';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {PasswordModule} from 'primeng/password';
import { AuthModule } from '@app/auth/auth.module';
import {AutoFocusModule} from "primeng/autofocus";

@NgModule({
  declarations: [
    NavbarComponent,
    LayoutComponent,
    MenuComponent,
    ProfileComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        ButtonModule,
        RippleModule,
        BadgeModule,
        CardModule,
        MenuModule,
        FormsModule,
        ReactiveFormsModule,
        DialogModule,
        AvatarModule,
        AvatarGroupModule,
        InputTextModule,
        InputTextareaModule,
        InplaceModule,
        TableModule,
        FileUploadModule,
        HttpClientModule,
        PasswordModule,
        AuthModule,
        AutoFocusModule,


    ],
  providers: [
    ToastrService
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
