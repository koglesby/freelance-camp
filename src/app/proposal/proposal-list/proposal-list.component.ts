import { Component, OnInit } from '@angular/core';
import { Proposal } from '../proposal';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit {

  proposalOne: Proposal = new Proposal(
    15,
    'some company',
    'http://github.com/koglesby',
    'Ruby on Rails',
    150, 120, 15,
    'kevinjoglesby@gmail.com'
  )
  proposalTwo: Proposal = new Proposal(
    16,
    'other company',
    'http://github.com/koglesby',
    'Ruby on Rails',
    15, 120, 150,
    'kevinjoglesby@gmail.com'
  )
  proposalThree: Proposal = new Proposal(
    19,
    'some weird company',
    'http://github.com/koglesby',
    'Ruby on Rails',
    150, 12, 15,
    'kevinjoglesby@gmail.com'
  )

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]

  constructor() { }

  ngOnInit() {
  }

}
