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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { StructuringCoresFormComponent } from './components/structuring-cores-form/structuring-cores-form.component';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CalendarModule,
    ButtonModule,
    CardModule,
    TableModule,
    DialogModule,
    FieldsetModule,
    DropdownModule
  ],
  declarations: [DocumentsMenuComponent, DocsHeaderComponent, StructuringCoresFormComponent],
})
export class DocumentsModule {}
