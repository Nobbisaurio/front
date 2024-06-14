import { Component, OnInit } from '@angular/core';
import { letterOfEngagement, realWorkEnviromentAct, secutiryInductionAct,downloadFile} from '../../helpers/';

import { docxd } from '../../helpers/EnterpriseProjectSchema';

import * as fs from 'file-saver';


import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import * as pdfMake from 'pdfmake/build/pdfmake';
import { Packer } from 'docx';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-documents-menu',
  templateUrl: './documents-menu.component.html',
  styleUrls: ['./documents-menu.component.css'],
})
export class DocumentsMenuComponent implements OnInit {
  ngOnInit(): void {}
  header = 'Documentos Fase Práctica';



  Namefiles: {
    label: string;
    icon: string;
    document: () => Promise<void>;
  }[] = [
    {
      label: 'Carta de Compromiso',
      icon: 'pi pi-check',
      document: letterOfEngagement,
    },
    {
      label: 'Acta De Inducción De Seguridad Y Medios De Protección',
      icon: 'pi pi-check',
      document: secutiryInductionAct,
    },
    {
      label: 'Acta De Formación Práctica En El Entorno Laboral Real',
      icon: 'pi pi-check',
      document: realWorkEnviromentAct,
    },
    {
      label: 'Esquema Proyecto Empresarial',
      icon: 'pi pi-check',
      document: downloadFile
    },
  ];
}
