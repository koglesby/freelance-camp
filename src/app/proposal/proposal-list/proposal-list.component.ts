import { Component, OnInit } from '@angular/core';
import { Proposal } from '../proposal';
import { ProposalService } from '../../proposal.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css'],
  providers: [ProposalService]
})
export class ProposalListComponent implements OnInit {

  proposals: Proposal[];
  errorMessage: string;
  constructor(private proposalService: ProposalService) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getProposals());
  }

  getProposals() {
    this.proposalService.getProposals()
      .subscribe(
        proposals => this.proposals = proposals,
        error => this.errorMessage = <any>error
      );
  }

}
