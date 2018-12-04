import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesRoutingModule } from './candidates-routing.module';
import { CreateCandidateComponent } from './create-candidate/create-candidate.component';
import { NavCandidatesComponent } from './nav-candidates/nav-candidates.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchCandidateComponent } from './search-candidate/search-candidate.component';

@NgModule({
  declarations: [CreateCandidateComponent, NavCandidatesComponent, SearchCandidateComponent],
  imports: [
    CommonModule,
    CandidatesRoutingModule,
    ReactiveFormsModule
  ]
})
export class CandidatesModule { }
