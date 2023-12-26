import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAgreementComponent } from './components/list-agreement/list-agreement.component';
import { ProfileAgreementComponent } from './components/profile-agreement/profile-agreement.component';

const routes: Routes = [
  {
    path: '',
    component: ListAgreementComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgreementRoutingModule { }
