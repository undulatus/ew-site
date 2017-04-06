import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { User, UserService } from '../user';
import { AuthenticationService } from '../guard';
import { GlobalEventsService } from "../utils";

@Component({
  selector: 'profile-dropdown',
  templateUrl: './profile-dropdown.component.html'
})
export class ProfileDropdownComponent implements OnInit {
  showMenu: boolean = false;
  currentUser: User;

  constructor(private router: Router, private globalEventsService: GlobalEventsService, private authService: AuthenticationService) { }
 
  ngOnInit() {
    this.authService.isLoggedIn().subscribe((mode)=>{
        // mode will be null the first time it is created, so you need to igonore it when null
        if (mode !== null) {
          this.showMenu = mode;
          this.showProfileDropdown(mode);
        }
    });
    
    // have a better implementation instead of this
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event:NavigationEnd) => { 
        console.log(event);
        if (event.url.indexOf('login') > -1) {
          this.showProfileDropdown(false);
        } else {
          this.showProfileDropdown(true);
        }
    });
  }

  private showProfileDropdown(show:boolean=true) {
    this.showMenu = show;
    if (show) {
      this.currentUser = this.authService.getCurrentUser();
      if (this.currentUser == null) {
        this.showMenu = false;
      }
    }
  }

  logout() {
    this.authService.logout();
  }
}