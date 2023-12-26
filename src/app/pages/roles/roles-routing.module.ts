import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRolesComponent } from './components/list-roles/list-roles.component';

const routes: Routes = [
  {
    path: '',
    component: ListRolesComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
