import { Routes, RouterModule } from '@angular/router';

import { PrincipalComponent } from './principal.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
    children: [
      { path: 'navbar', component: NavbarComponent },
      { path: 'timeline', component: TimelineComponent },
      // { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]
  }
];

export const PrincipalRouting = RouterModule.forChild(routes);