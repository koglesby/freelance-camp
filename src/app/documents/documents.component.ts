import { Component, OnInit } from '@angular/core';
import { Document } from './document.interface'
import { DocumentService } from '../document.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
  providers: [DocumentService]
})
export class DocumentsComponent implements OnInit {
  pageTitle: string = "Document Dashboard";
  documents: Document[];
  errorMessage: string;

  constructor(
    private documentService: DocumentService
  ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getDocuments());
  }

  getDocuments() {
    this.documentService.getDocuments()
      .subscribe(
        documents => this.documents = documents,
        error => this.errorMessage = <any>error
      );
  }

}
