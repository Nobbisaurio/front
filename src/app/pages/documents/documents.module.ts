import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsMenuComponent } from './components/documents-menu/documents-menu.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@NgModule({
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    CardModule,
    ButtonModule,
  ],
  declarations: [DocumentsMenuComponent],
})
export class DocumentsModule {}
