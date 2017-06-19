import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Proposal } from './proposal/proposal';


@Injectable()
export class ProposalService {
  private handleError(error: any): void {};

  private proposalsUrl = 'http://localhost:3002/proposals';
  constructor(
    private http: Http
  ) { }

  getProposals(): Observable<Proposal[]> {
    return this.http.get(this.proposalsUrl)
      .map((response: Response) => <Proposal[]>response.json())
      .catch((response: Response) => <any>this.handleError(response));
  }

  getProposal(id: number) {
    return this.http.get(this.proposalsUrl + "/" + id);
  }

  createProposal(proposal) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.proposalsUrl, JSON.stringify(proposal),
      {headers:headers}).map((res: Response) => res.json());
  }
}
