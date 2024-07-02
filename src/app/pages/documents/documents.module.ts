import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsMenuComponent } from './components/documents-menu/documents-menu.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DocsHeaderComponent } from './components/docs-header/docs-header.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { FieldsetModule } from 'primeng/fieldset';


@NgModule({
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    CardModule,
    ButtonModule,
    TableModule,
    DialogModule,
    FieldsetModule
  ],
  declarations: [DocumentsMenuComponent, DocsHeaderComponent],
})
export class DocumentsModule {}
