import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCompanyComponent } from './components/list-company/list-company.component';
import { ProfileCompanyComponent } from './components/profile-company/profile-company.component';

const routes: Routes = [
  {
    path: '',
    component: ListCompanyComponent
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
