import { Component, OnInit } from '@angular/core';
import { DocumentsService } from '../../service/service.service';
import { CreateDocument } from '../../models/create-document';
import { baseDocuments } from '../../models/base-documents';

@Component( {
  selector: 'app-docs-header',
  templateUrl: './docs-header.component.html',
  styleUrls: [ './docs-header.component.scss' ]
} )
export class DocsHeaderComponent implements OnInit {

  constructor( private readonly documentsService: DocumentsService ) { }

  header = 'Encabezado de Documentos';

  hasBaseDocuments() {

    this.documentsService.getDocuments().subscribe( {
      next: async ( res ) => {
        const hasDocs = res.length < 1;
        if ( hasDocs ) {
          const docs: CreateDocument[] = baseDocuments;
          for ( let i = 0; i < docs.length; i++ ) {
            this.documentsService.createDocument( docs[ i ] ).subscribe()
          }
        }

        return 'xd';
      },
      error: ( error ) => {
        return false;
      }
    } );
    return "xd";
  };



  ngOnInit(): void {

    this.hasBaseDocuments();

    // this.documentsService.getDocuments().subscribe( {
    //   next: ( res ) => console.log( res ),
    //   error: ( error ) => console.log( error )
    // } );
  }

}
