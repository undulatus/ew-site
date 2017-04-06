import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { Opportunity } from '../domain/opportunity.model';

@Injectable()
export class OpportunityListService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private opportunitiesUrl = 'api/opportunities';
    private myOpportunitiesURL = 'workforce/opportunities';
    private otherOpportunitiesURL = 'opportunities/other';

    constructor(private http: Http) { }

    getOwnedOpportunities(id): Observable<Opportunity[]> {
        const url = `${this.myOpportunitiesURL}/${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleErrors);
    }
    private extractData(res: Response) {
        console.log(res.json());
        let body = res.json();
        return body.data || {};
    }
    getMyOpportunities(id: number): Promise<Opportunity[]> {
        const url = `${this.myOpportunitiesURL}/${id}`;
        return this.http.get(url).toPromise().then(response => response.json().data as Opportunity[]).catch(this.handleError);
    }
    getOpportunities(id: number): Promise<Opportunity[]> {
        const url = `${this.otherOpportunitiesURL}/${id}`;
        return this.http.get(url).toPromise().then(response => response.json().data as Opportunity[]).catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    private handleErrors(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}