import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillTestingRoutingModule } from './skill-testing-routing.module';
import { NavSkillTestingComponent } from './nav-skill-testing/nav-skill-testing.component';
import { ListSkillTestingComponent } from './list-skill-testing/list-skill-testing.component';
import { CreateSkillTestingComponent } from './create-skill-testing/create-skill-testing.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavSkillTestingComponent, ListSkillTestingComponent, CreateSkillTestingComponent],
  imports: [
    CommonModule,
    SkillTestingRoutingModule,
    ReactiveFormsModule
  ]
})
export class SkillTestingModule { }
