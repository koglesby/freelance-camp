import { Component, OnInit } from '@angular/core';
import { Document } from './document.interface'

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  pageTitle: string = "Document Dashboard";
  documents: Document[] = [
    {
      title: "My first doc",
      description: 'some desc',
      file_url: 'http://google.com',
      updated_at: '6/13/17',
      image_url: 'http://google.com'
    },
    {
      title: "My second doc",
      description: 'another desc',
      file_url: 'http://google.com',
      updated_at: '6/13/17',
      image_url: 'http://google.com'
    },
    {
      title: "My last doc",
      description: 'some description',
      file_url: 'http://google.com',
      updated_at: '6/13/17',
      image_url: 'http://google.com'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
