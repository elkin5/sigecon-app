import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Imports para las rutas
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './helpers/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

// se usa use hash para utilizar # en los llamados y que no se cargue la pagina completamente
export const appRouting = RouterModule.forRoot(routes, { useHash: true });