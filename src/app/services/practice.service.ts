import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Practice } from '../domain/practice.model';

@Injectable()
export class PracticeService {
    private practiceUrl = 'estimate-worksheet/practices';

    constructor(
        private http: Http
    ) { }

    getPractices(): Promise<Practice[]> {
        const url = `${this.practiceUrl}`;
        return this.http.get(url).toPromise().then(response=>{
            return this.extractData(response);
        }).catch(this.handlePromiseError);
    }

    getPracticesPerRole(value): Promise<Practice[]> {
        const url = `/estimate-worksheet/roles/` + value + '/practices';
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