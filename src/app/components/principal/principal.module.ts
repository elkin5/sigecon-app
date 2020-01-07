import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalComponent } from './principal.component';

import { TimelineComponent } from './timeline/timeline.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { PrincipalRouting } from './principal-routing.module';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    PrincipalComponent,
    TimelineComponent,
    NavbarComponent,
    CardComponent
  ],
  imports: [
    SharedModule,
    PrincipalRouting,
    CommonModule
  ],
  exports: [
    TimelineComponent,
    NavbarComponent
  ],
  providers: [],
})
export class PrincipalModule { }