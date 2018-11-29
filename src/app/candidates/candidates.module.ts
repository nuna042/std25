import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
import { ListCandidatesComponent } from './list-candidates/list-candidates.component';
import { CreateCandidateComponent } from './create-candidate/create-candidate.component';
import { NavCandidatesComponent } from './nav-candidates/nav-candidates.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListCandidatesComponent, CreateCandidateComponent, NavCandidatesComponent],
  imports: [
    CommonModule,
    CandidatesRoutingModule,
    ReactiveFormsModule
  ]
})
export class CandidatesModule { }
