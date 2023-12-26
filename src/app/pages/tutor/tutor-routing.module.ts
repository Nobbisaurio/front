import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTutorComponent } from './components/list-tutor/list-tutor.component';

const routes: Routes = [
  {
    path: '',
    component: ListTutorComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorRoutingModule { }
