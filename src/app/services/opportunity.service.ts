import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Opportunity } from '../domain/opportunity.model';

@Injectable()
export class OpportunityService {
    private opportunityUrl = 'estimate-worksheet/opportunities';

    constructor(
        private http: Http
    ) { }

    getOpportunities(): Promise<Opportunity[]> {
        const url = `${this.opportunityUrl}`;
        return this.http.get(url).toPromise().then(response => {
            return this.extractData(response);
        }).catch(this.handlePromiseError);
    }

    saveOpportunity(opportunity: Opportunity): Promise<Opportunity> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.opportunityUrl, { opportunity }, options)
            .toPromise()
            // .then(response => response.status)
            .then(this.extractData)
            .catch(this.handlePromiseError);
            // .catch(this.handleError);
    }

    private extractData(res: Response) {
        // console.log("--- res: ", res);
        let body = res.json();
        return body || {};
    }

    private handlePromiseError(error: any): Promise<any> {
        console.error('Error: ', error);
        return Promise.reject(error.message || error);
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    }
}