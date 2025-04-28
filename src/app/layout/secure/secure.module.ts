import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecureRoutingModule } from './secure-routing.module';
import { SecureComponent } from './secure.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    SecureComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SecureRoutingModule
  ]
})
export class SecureModule { }
