import { Component } from '@angular/core';
//Injeccion servicio de traduccion
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'sigecon-app';

  //Se agrega la variable a injectar para la traduccion
  constructor(private translate: TranslateService) {
    //Se define el valor por defecto para 
    translate.setDefaultLang('es');
  }

  user = {
    name: 'Mary',
    age: 34
  };

  //seleccion para idioma
  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
