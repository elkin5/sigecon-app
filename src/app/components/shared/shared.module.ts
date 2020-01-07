import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NofoundpageComponent } from './nofoundpage/nofoundpage.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NofoundpageComponent
  ], 
  imports: [CommonModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    NofoundpageComponent
  ],
  providers: [],
})
export class SharedModule { }