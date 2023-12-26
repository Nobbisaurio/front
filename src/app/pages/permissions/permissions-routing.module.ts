import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPermissionsComponent } from './components/list-permissions/list-permissions.component';

const routes: Routes = [
  {
    path: '',
    component: ListPermissionsComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionsRoutingModule { }
