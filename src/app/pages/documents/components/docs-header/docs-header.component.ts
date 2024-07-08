import { Component, OnInit } from '@angular/core';
import { DocumentsService } from '../../service/service.service';
import { CreateDocument } from '../../models/create-document';
import { baseDocuments } from '../../models/base-documents';
import { Observable, catchError, concatMap, from, of, toArray } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-docs-header',
  templateUrl: './docs-header.component.html',
  styleUrls: ['./docs-header.component.scss']
})
export class DocsHeaderComponent implements OnInit {
  selected!: CreateDocument;
  displayDocumentInfo = false;
  visible = false;
  loading: boolean = false;
  rowData: CreateDocument;
  formHeader!: FormGroup;
  hasData: boolean = false;
  new: Date;

  constructor(
    private fb: FormBuilder,
    private readonly documentsService: DocumentsService) { }

  header = 'Encabezado de Documentos';

  documents: CreateDocument[] = [];

  openModalDocument(document: CreateDocument) {
    this.visible = true;
    this.formHeader.disable()
    this.formHeader.patchValue({
      ...document
    })
  }

  editDocument() {
    if (this.formHeader.value) {
      this.hasData = true
      this.formHeader.enable()
    }
  }

  cancelEdit() {
    this.hasData = false
    this.formHeader.disable()
  }

  formatDate(date: Date): string {
    date = new Date(date)
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    return `${day}-${month}-${year}`;
  }

  saveDocument() {
    const { id, documentDefinition, elaborationDate, updateDate, ...documentData } = this.formHeader.value
    this.documentsService.updateDocument(id, { elaborationDate: this.formatDate(elaborationDate), updateDate: this.formatDate(updateDate), ...documentData }).subscribe({
      next: res => {
        const rootIndex = this.documents.findIndex(
          (doc) => doc.id === id
        );

        this.documents[rootIndex] = res;

        this.formHeader.disable()
        this.visible = false
      },
      error: err => console.log(err)
    })
  }


  hasBaseDocuments(): Observable<CreateDocument[]> {
    return this.documentsService.getDocuments().pipe(
      concatMap((res) => {
        if (res.length === 0) {
          const docs: CreateDocument[] = baseDocuments;
          return from(docs).pipe(
            concatMap((doc) => this.documentsService.createDocument(doc)),
            toArray(),
            concatMap(() => this.documentsService.getDocuments())
          );
        }
        return of(res);
      }),
      catchError((error) => {
        console.error('Error managing documents:', error);
        return of([]);
      })
    );
  }

  ngOnInit(): void {

    this.formHeader = this.fb.group({
      id: ['', [Validators.required]],
      process: ['', [Validators.required, Validators.minLength(3)]],
      docName: ['', [Validators.required, Validators.minLength(3)]],
      version: ['', [Validators.required, Validators.minLength(3)]],
      elaborationDate: [new Date(), [Validators.required, Validators.minLength(3)]],
      updateDate: [new Date(), [Validators.required, Validators.minLength(3)]],
      code: ['', [Validators.required, Validators.minLength(3)]],
      documentDefinition: ['', [Validators.required, Validators.minLength(3)]],
    });

    this.hasBaseDocuments().subscribe({
      next: (docs) => {
        this.documents = docs;
      },
      error: (err) => console.log(err)
    });



    // this.documentsService.getDocuments().subscribe( {
    //   next: ( res ) => console.log( res ),
    //   error: ( error ) => console.log( error )
    // } );
  }

}
