import { Routes, RouterModule } from '@angular/router';

// Para auth
import { AuthGuard } from './helpers/auth.guard';

// Imports para las rutas
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NofoundpageComponent } from './components/shared/nofoundpage/nofoundpage.component';

const routes: Routes = [
  // { path: '', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  // { path: '**', pathMatch: 'full', redirectTo: '' }
  { path: '**', component: NofoundpageComponent }
];

// se usa use hash para utilizar # en los llamados y que no se cargue la pagina completamente
export const AppRouting = RouterModule.forRoot(routes, { useHash: true });