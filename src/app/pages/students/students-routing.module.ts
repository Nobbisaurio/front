import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListStudentsComponent} from './components/list-students/list-students.component';
import {ProfileStudentComponent} from './components/profile-student/profile-student.component';
import {
  AssignamentStudentComponent
} from "@pages/students/components/assignament-student/assignament-student.component";

import { PasswordChangeComponent } from '@app/auth/components/change-password/password-change.component';


const routes: Routes = [
  {
    path: '',
    component: ListStudentsComponent
  },
  {
    path: 'profile/:id',
    component: ProfileStudentComponent
  },
  {
    path: 'assigment',
    component: AssignamentStudentComponent
  },

  {
    path: '**',
    redirectTo: ''
  },


  {
    path: 'change-password',
    component: PasswordChangeComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
