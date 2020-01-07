import { Component, OnInit } from '@angular/core';
//Injeccion servicio de traduccion
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  //Se agrega la variable a injectar para la traduccion
  constructor(private translate: TranslateService) {
    //Se define el valor por defecto para 
    translate.setDefaultLang('es');
  }

  ngOnInit() {
  }

  //seleccion para idioma
  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
