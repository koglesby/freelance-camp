import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Document } from './documents/document.interface';


@Injectable()
export class DocumentService {
  private handleError(error: any): void {};

  private documentsUrl = 'http://localhost:3001/freelance_documents.json';
  constructor(
    private http: Http
  ) { }

  getDocuments(): Observable<Document[]> {
    return this.http.get(this.documentsUrl)
      .map((response: Response) => <Document[]>response.json())
      .catch((response: Response) => <any>this.handleError(response));
  }

}
