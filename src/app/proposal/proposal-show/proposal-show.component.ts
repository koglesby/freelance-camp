import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProposalService } from '../../proposal.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Proposal } from '../proposal';

@Component({
  selector: 'app-proposal-show',
  templateUrl: './proposal-show.component.html',
  styleUrls: ['./proposal-show.component.css'],
  providers: [ProposalService]
})
export class ProposalShowComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private proposalService: ProposalService,
    private http: Http
  ) { }

  @Input()
  proposal: Proposal;

  ngOnInit(): void {
    let proposalRequest = this.activatedRoute.params
      .flatMap((params: Params) =>
        this.proposalService.getProposal(+params['id'])
      );
    proposalRequest.subscribe(response => this.proposal = response.json());
  }
}
