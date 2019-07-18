import { Component } from '@angular/core';
//Injeccion servicio de traduccion
import { TranslateService } from '@ngx-translate/core';

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

  //Se agrega la variable a injectar para la traduccion
  constructor(private translate: TranslateService, private router: Router,
    private authenticationService: AuthService) {
    //Se define el valor por defecto para 
    translate.setDefaultLang('es');
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

  //seleccion para idioma
  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
