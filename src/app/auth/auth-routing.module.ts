import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordChangeComponent } from './components/change-password/password-change.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { LoginComponent } from "@app/auth/components/login/login.component";
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';

const routes: Routes = [
  {
    path: 'password',
    component: PasswordChangeComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
