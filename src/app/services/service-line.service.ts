import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { ServiceLine } from '../domain/service-type.model';

@Injectable()
export class ServiceLineService {
    private serviceLinesUrl = 'workforce/servicelines';

    constructor(
        private http: Http
    ) { }

    getServiceLines(): Promise<ServiceLine[]> {
        const url = `${this.serviceLinesUrl}`;
        return this.http.get(url).toPromise().then(response=>{
            return this.extractData(response);
        }).catch(this.handlePromiseError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
    
    private handlePromiseError(error: any): Promise<any> {
        console.error('Error: ', error);
        return Promise.reject(error.message || error);
    }
}