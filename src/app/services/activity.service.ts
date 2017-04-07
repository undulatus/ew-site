import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Activity } from '../domain/activity.model';

@Injectable()
export class ActivityService {
    private activityUrl = '/workforce/servicelines/{serviceLineId}/activities'; //TO update get activity with SL Id
    private activitiesUrl = 'workforce/activities';

    constructor(
        private http: Http
    ) { }

    getActivities(): Promise<Activity[]> {
        const url = `${this.activitiesUrl}`;
        return this.http.get(url).toPromise().then(response=>{
            return this.extractData(response);
        }).catch(this.handlePromiseError);
    }

    getActivity(value): Promise<Activity[]> {
        const url = `/workforce/servicelines/` + value + '/activities';
        console.log(url);
        return this.http.get(url).toPromise().then(response=>{
            console.log('getActivity response: ', response);
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