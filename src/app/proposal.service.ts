import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Proposal } from './proposal/proposal';


@Injectable()
export class ProposalService {
  private handleError(error: any): void {};

  private proposalsUrl = 'http://localhost:3002/proposals.json';
  constructor(
    private http: Http
  ) { }

  getProposals(): Observable<Proposal[]> {
    return this.http.get(this.proposalsUrl)
      .map((response: Response) => <Proposal[]>response.json())
      .catch((response: Response) => <any>this.handleError(response));
  }

  getProposal(id: number) {
    return this.http.get(this.proposalsUrl + "/" + id + '.json');
  }
}
