import { Component, OnInit } from '@angular/core';
import { DocumentsService } from '../../service/service.service';
import { CreateDocument } from '../../models/create-document';
import { baseDocuments } from '../../models/base-documents';
import { Observable, catchError, concatMap, from, of, toArray } from 'rxjs';

@Component( {
  selector: 'app-docs-header',
  templateUrl: './docs-header.component.html',
  styleUrls: [ './docs-header.component.scss' ]
} )
export class DocsHeaderComponent implements OnInit {
  selected!: CreateDocument;
  displayDocumentInfo = false;
  visible = false;
  loading: boolean = false;
  rowData: CreateDocument;

  constructor( private readonly documentsService: DocumentsService ) { }

  header = 'Encabezado de Documentos';

  documents: CreateDocument[] = [];

  openModalDocument( document: CreateDocument ) {
    this.visible = true;
    this.rowData = document;
  }

  hasBaseDocuments(): Observable<CreateDocument[]> {
    return this.documentsService.getDocuments().pipe(
      concatMap( ( res ) => {
        if ( res.length === 0 ) {
          const docs: CreateDocument[] = baseDocuments;
          return from( docs ).pipe(
            concatMap( ( doc ) => this.documentsService.createDocument( doc ) ),
            toArray(),
            concatMap( () => this.documentsService.getDocuments() )
          );
        }
        return of( res );
      } ),
      catchError( ( error ) => {
        console.error( 'Error managing documents:', error );
        return of( [] );
      } )
    );
  }










  ngOnInit(): void {

    this.hasBaseDocuments().subscribe( {
      next: ( docs ) => {
        this.documents = docs;
        console.log( this.documents );
      },
    } );



    // this.documentsService.getDocuments().subscribe( {
    //   next: ( res ) => console.log( res ),
    //   error: ( error ) => console.log( error )
    // } );
  }

}
