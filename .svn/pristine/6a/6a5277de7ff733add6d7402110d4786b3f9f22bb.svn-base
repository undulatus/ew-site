import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { MarketCircle } from '../domain/market-circle.model';

@Injectable()
export class MarketCircleService {
    private marketcirclesUrl = 'workforce/marketcircles';

    constructor(
        private http: Http
    ) { }

    getMarketCircles(): Promise<MarketCircle[]> {
        const url = `${this.marketcirclesUrl}`;
        return this.http.get(url).toPromise().then(response=>{
            console.log('getMarketCircles response: ', response);
            return this.extractData(response);
        }).catch(this.handlePromiseError);
    }

    private extractData(res: Response) {
        console.log('res.json(): ', res.json());
        let body = res.json();
        return body || {};
    }
    
    private handlePromiseError(error: any): Promise<any> {
        console.error('Error: ', error);
        return Promise.reject(error.message || error);
    }
}