import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentsMenuComponent } from './components/documents-menu/documents-menu.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentsMenuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentsRoutingModule {}
