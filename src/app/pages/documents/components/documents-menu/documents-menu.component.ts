import { Component, OnInit } from '@angular/core';
import { letterOfEngagement } from '../../helpers/letterOfEngagement';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-documents-menu',
  templateUrl: './documents-menu.component.html',
  styleUrls: ['./documents-menu.component.css'],
})
export class DocumentsMenuComponent implements OnInit {
  ngOnInit(): void {}
  header = 'Documentos Fase Práctica';

  Namefiles = [
    {
      label: 'Carta de Compromiso',
      icon: 'pi pi-check',
    },
    {
      label: 'Carta de Compromiso 1',
      icon: 'pi pi-check',
    },
    {
      label: 'Carta de Compromiso 2',
      icon: 'pi pi-check',
    },
    {
      label: 'Carta de Compromiso 3',
      icon: 'pi pi-check',
    },
    {
      label: 'Carta de Compromiso 4',
      icon: 'pi pi-check',
    },
  ];

  // pdf
   createPdf() {
    letterOfEngagement();
  }
}
