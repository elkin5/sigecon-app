import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Imports para las rutas
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'signup' }
];

// se usa use hash para utilizar # en los llamados y que no se cargue la pagina completamente
export const appRouting = RouterModule.forRoot(routes, { useHash: true });
