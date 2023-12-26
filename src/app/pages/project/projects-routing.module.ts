import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListProjectComponent } from "./components/list-project/list-project.component";
import { ProfileProjectComponent } from "./components/profile-project/profile-project.component";
import { AssignamentProjectComponent } from "./components/assignament-project/assignament-project.component";


const routes: Routes = [
  {
    path: '',
    component: ListProjectComponent
},
{
  path: 'profile/:id',
  component: ProfileProjectComponent
},
{
path: 'assigment',
component: AssignamentProjectComponent
},

{
  path: '**',
  redirectTo: ''
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
