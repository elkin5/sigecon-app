import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// import que permite usar materialize-css
import { MaterializeModule } from 'angular2-materialize';
import { TimelineComponent } from './components/timeline/timeline.component';
import { SigninComponent } from './components/signin/signin.component';

// import para traduccion
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SignupComponent } from './components/signup/signup.component';

// imports para rutas (navegacion entre paginas)
import { appRouting } from './app-routing.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
