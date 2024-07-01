import { Component, OnInit } from '@angular/core';

// import * as fs from 'fs';
import * as fs from 'file-saver';

import * as docx from 'docx';

import * as fsxd from 'fs-web';

import * as exceljs from 'exceljs';


import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import * as pdfMake from 'pdfmake/build/pdfmake';
import { DocumentsService } from '../../service/service.service';
( pdfMake as any ).vfs = pdfFonts.pdfMake.vfs;

import { backgroundImage, logoImage } from '../../helpers/Base64Image';
import { LocalStorageService } from '../../../../core/storage/storage.service';
import { UserAuth } from '@app/core/models/user-auth';
import { DocumentProps } from '../../models/documents-Props';
import { UserStudent } from '@app/pages/students/models/user-student';
import { StudentsService } from '../../../students/service/students.service';



@Component( {
  selector: 'app-documents-menu',
  templateUrl: './documents-menu.component.html',
  styleUrls: [ './documents-menu.component.css' ],
} )
export class DocumentsMenuComponent implements OnInit {
  header = 'Documentos Fase Práctica';

  constructor( private documentsService: DocumentsService, private localStorageService: LocalStorageService, private studentsService: StudentsService ) { }

  Namefiles: {
    label: string;
    icon: string;
    document: () => any;
  }[] = [];

  currentStudent: UserStudent;

  studentData = {
    studentName: '',
    studentCredential: '',
    studentCareerLevel: '5to', // HACER CAMBIOS
    studentCareerName: '',
    instituteName: 'INSTITUTO SUPERIOR TECNOLÓGICO DE TURISMO Y PATRIMONIO YAVIRAC',
    studentEnterpriseName: 'HSB SOFT ECUADOR',  // HACER CAMBIOS
  };

  setData = () => {
    const { student: { id } }: UserAuth = this.localStorageService.getItem( 'currentUser' );
    return this.studentsService.getStudentProfile( Number( id ) ).subscribe( {
      next: student => this.currentStudent = student
    } );
  };
  //TECNOLOGIA SUPERIOR EN


  ngOnInit(): void {

    this.setData();

    this.documentsService.getDocuments().subscribe( {
      next: ( res ) => {
        res.sort( ( a, b ) => a[ 'id' ] - b[ 'id' ] );
        console.log( this.currentStudent );

        for ( let i = 0; i < res.length; i++ ) {
          const { docName, documentDefinition, } = res[ i ];

          const executeDocuments = new Function( `
              ${ documentDefinition }
                return createDocument${ i + 1 };
            `)();


          this.Namefiles.push( {
            document: async () => await executeDocuments(
              // documentProps
              {
                bgImage: backgroundImage(),
                logoImage: logoImage(),
                instituteName: this.studentData.instituteName,
                docx,
                fileSaver: fs,
                exceljs: exceljs,
                ...this.currentStudent
              }
            ),
            label: docName,
            icon: 'pi pi-check',
          } );
        }
      }
    } );

  }

}
