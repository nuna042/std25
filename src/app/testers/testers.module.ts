import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestersRoutingModule } from './testers-routing.module';
import { CreateTesterComponent } from './create-tester/create-tester.component';
import { ListTestersComponent } from './list-testers/list-testers.component';
import { NavTesterComponent } from './nav-tester/nav-tester.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateTesterComponent, ListTestersComponent, NavTesterComponent],
  imports: [
    CommonModule,
    TestersRoutingModule,
    ReactiveFormsModule
  ]
})
export class TestersModule { }
