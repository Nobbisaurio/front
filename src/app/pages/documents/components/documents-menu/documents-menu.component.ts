import { Component, OnInit } from '@angular/core';

// import * as fs from 'fs';
import * as fs from 'file-saver';

import * as docx from 'docx';

import * as fsxd from 'fs-web'

import * as exceljs from 'exceljs';


import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import * as pdfMake from 'pdfmake/build/pdfmake';
import { DocumentsService } from '../../service/service.service';
( pdfMake as any ).vfs = pdfFonts.pdfMake.vfs;

import { backgroundImage, logoImage } from '../../helpers/Base64Image';
import { LocalStorageService } from '../../../../core/storage/storage.service';
import { UserAuth } from '@app/core/models/user-auth';
import { DocumentProps } from '../../models/documents-Props';



@Component( {
  selector: 'app-documents-menu',
  templateUrl: './documents-menu.component.html',
  styleUrls: [ './documents-menu.component.css' ],
} )
export class DocumentsMenuComponent implements OnInit {
  header = 'Documentos Fase Práctica';

  constructor( private documentsService: DocumentsService, private localStorageService: LocalStorageService ) { }

  Namefiles: {
    label: string;
    icon: string;
    document: ( ) => any;
  }[] = [];

  studentData = {
    studentName: '',
    studentCredential: '',
    studentCareerLevel: '5to', // HACER CAMBIOS
    studentCareerName: '',
    instituteName: 'INSTITUTO SUPERIOR TECNOLÓGICO DE TURISMO Y PATRIMONIO YAVIRAC',
    studentEnterpriseName: 'HSB SOFT ECUADOR',  // HACER CAMBIOS
  };

  setData = () => {
    const { student: { firstName, lastName, career }, dni, company }: UserAuth = this.localStorageService.getItem( 'currentUser' );
    this.studentData.studentName = firstName + ' ' + lastName;
    this.studentData.studentCredential = dni;
    this.studentData.studentCareerName = ` ${ career.name.toUpperCase() }`;
    // this.studentData.studentEnterpriseName = company.name
  };
  //TECNOLOGIA SUPERIOR EN


  ngOnInit(): void {

    this.setData();

    this.documentsService.getDocuments().subscribe( {
      next: ( res ) => {
        // const documentProps = {
        //     docx,
        //     fileSaver: fs,
        //     backgroundImage,
        //     logoImage,
        //   ...this.studentData
        // }
        console.log(res)
        res.sort( ( a, b ) => a[ 'id' ] - b[ 'id' ] );

        for ( let i = 0; i < res.length; i++ ) {
          const { docName, documentDefinition, process } = res[ i ];

          const respuesta = new Function( `
              ${ documentDefinition }
                return createDocument7;
            `)();

          this.Namefiles.push( {
            document: async () => await respuesta(
              // documentProps
              {
                bgImage: backgroundImage(),
                logoImage: logoImage(),
                studentName: this.studentData.studentName,
                studentCredential: this.studentData.studentCredential,
                studentCareerLevel: this.studentData.studentCareerLevel,
                studentCareerName: this.studentData.studentCareerName,
                instituteName: this.studentData.instituteName,
                studentEnterpriseName: this.studentData.studentEnterpriseName,
                docx,
                fileSaver: fs,
                exceljs: exceljs
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
