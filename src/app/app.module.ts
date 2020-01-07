import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import que permite usar materialize-css
import { MaterializeModule } from 'angular2-materialize';

// import para traduccion
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Rutas (navegacion entre paginas)
import { AppRouting } from './app-routing.module';

//imports para crear formularios
import { FormsModule } from '@angular/forms';
// el import del HttpClientModule tambien es necesario para conectar modelo con html

//imports para autenticacion (reactive modules)
import { ReactiveFormsModule } from '@angular/forms';
// el import del HttpClientModule tambien es necesario

//import para interceptar peticiones en el login
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/jwt.interceptor';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

// modulos
import { PrincipalModule } from './components/principal/principal.module';
import { SharedModule } from './components/shared/shared.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    PrincipalModule,
    SharedModule,
    AppRouting,
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
    })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
