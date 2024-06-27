import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentsMenuComponent } from './components/documents-menu/documents-menu.component';
import { DocsHeaderComponent } from './components/docs-header/docs-header.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentsMenuComponent
  },
   {
    path: 'docs-header',
    pathMatch: 'full',
    component: DocsHeaderComponent
  },
];

@NgModule( {
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ],
} )
export class DocumentsRoutingModule { }
