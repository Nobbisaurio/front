import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { PasswordChangeComponent } from './components/change-password/password-change.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {RippleModule} from "primeng/ripple";
import {CardModule} from "primeng/card";
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import {DividerModule} from "primeng/divider";
import {PasswordModule} from "primeng/password";
import { ShowForRolesDirective } from './directive/show-for-roles.directive';


@NgModule({
  declarations: [
    LoginComponent,
    PasswordChangeComponent,
    ResetPasswordComponent,
    ForgetPasswordComponent,
    ShowForRolesDirective
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    RippleModule,
    CardModule,
    DividerModule,
    PasswordModule,
  ],
  exports: [
    ShowForRolesDirective,
    PasswordChangeComponent
  ]
})
export class AuthModule { }
