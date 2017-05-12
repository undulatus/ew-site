import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Role } from '../domain/role.model';

@Injectable()
export class RoleService {
    private roleUrl = 'estimate-worksheet/roles';
   
    constructor(
        private http: Http
    ) { }

    getRoles(): Promise<Role[]> {
        const url = `${this.roleUrl}`;
        return this.http.get(url).toPromise().then(response=>{
            return this.extractData(response);
        }).catch(this.handlePromiseError);
    }

    getRolesByServiceType(value): Promise<Role[]> {
        const url = `/estimate-worksheet/servicelines/` + value + '/roles';
        return this.http.get(url).toPromise().then(response=>{
            // console.log('getRole response: ', response);
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