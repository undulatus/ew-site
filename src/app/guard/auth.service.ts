import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { Observable , BehaviorSubject} from 'rxjs';
import 'rxjs/add/operator/map'

import { LocalStorageService } from 'angular-2-local-storage';
import { User } from '../user';
import {GlobalEventsService} from "../utils/index";
 
@Injectable()
export class AuthenticationService {
    currentUser: User;
    isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

    constructor(
        private http: Http,
        private router: Router,
        private globalEventsService: GlobalEventsService,
        private localStorageService: LocalStorageService) { }
        
    
    isLoggedIn() : Observable<boolean> {
        return this.isLoginSubject.asObservable().share();
    }
    
    login(username: string, password: string) {
        return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this.localStorageService.set('currentUser', JSON.stringify(user));
                    this.currentUser = user;
                    this.isLoginSubject.next(true);
                    this.globalEventsService.showMenu(true);
                    this.globalEventsService.showNav(true);
                }
            });
    }
 
    logout() {
        // remove user from local storage to log user out
        this.localStorageService.remove('currentUser');
        this.globalEventsService.showNav(false);
        this.globalEventsService.showMenu(false);

        this.router.navigate(['login']);
    }

    

    getCurrentUser() {
        if (this.currentUser) {
            return this.currentUser;
        } else {
            var currU = this.localStorageService.get('currentUser');
            if (currU) {
                this.currentUser = JSON.parse(currU.toString());
                return this.currentUser;
            } else {
                return null;
            }
        }
    }

    private hasToken(): boolean {
        console.log(!!this.localStorageService.get('currentUser'));
        return !!this.localStorageService.get('currentUser');
    }
}