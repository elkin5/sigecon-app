import { Component } from '@angular/core';


import { Router } from '@angular/router';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sigecon-app';
  currentUser: any;

  constructor(private router: Router,
    private authenticationService: AuthService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  user = {
    name: 'Mary',
    age: 34
  };

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  
}
