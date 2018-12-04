import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertRoutingModule } from './cert-routing.module';
import { ListCertsComponent } from './list-certs/list-certs.component';

@NgModule({
  declarations: [ListCertsComponent],
  imports: [
    CommonModule,
    CertRoutingModule
  ]
})
export class CertModule { }
