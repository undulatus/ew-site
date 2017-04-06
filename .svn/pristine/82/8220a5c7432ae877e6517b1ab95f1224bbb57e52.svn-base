import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { User, UserService } from '../user';
import { AuthenticationService } from '../guard';
import { GlobalEventsService } from "../utils";

@Component({
  selector: 'main-navbar',
  templateUrl: './main-navbar.component.html'
})
export class MainNavBarComponent implements OnInit {
  showNav: boolean = false;
  currentUser: User;

  constructor(private router: Router, private globalEventsService: GlobalEventsService, private authService: AuthenticationService) { }
  ngOnInit() {
    this.globalEventsService.showNavEmitter.subscribe((mode)=>{
        // mode will be null the first time it is created, so you need to igonore it when null
        if (mode !== null) {
          this.showNav = mode;
          this.showNavBar(mode);
        }
    });

    // have a better implementation instead of this
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event:NavigationEnd) => { 
        console.log('navbar:' + event);
        if (event.url.indexOf('login') > -1) {
          this.showNavBar(false);
        } else {
          this.showNavBar();
        }
    });
  }

  private showNavBar(show:boolean=true) {
    this.showNav = show;
    if (show) {
      this.currentUser = this.authService.getCurrentUser();
      if (this.currentUser == null) {
        this.showNav = false;
      }
    }
  }
}