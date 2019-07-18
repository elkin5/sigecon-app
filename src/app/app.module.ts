import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// import que permite usar materialize-css
import { MaterializeModule } from 'angular2-materialize';
import { TimelineComponent } from './components/timeline/timeline.component';

// import para traduccion
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SignupComponent } from './components/signup/signup.component';

// imports para rutas (navegacion entre paginas)
import { appRouting } from './app-routing.module';

//imports para crear formularios
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
// el import del HttpClientModule tambien es necesario para conectar modelo con html

//imports para autenticacion (reactive modules)
import { ReactiveFormsModule } from '@angular/forms';
// el import del HttpClientModule tambien es necesario
import { LoginComponent } from './components/login/login.component';

//import para interceptar peticiones en el login
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/jwt.interceptor';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    SignupComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MaterializeModule,
    ReactiveFormsModule,
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
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
