import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavCandidatesComponent } from './nav-candidates/nav-candidates.component';
import { ListCandidatesComponent } from './list-candidates/list-candidates.component';
import { CreateCandidateComponent } from './create-candidate/create-candidate.component';

const routes: Routes = [
  {    
    path: '', component: NavCandidatesComponent,
    children: [
      { path: 'list-candidates', component: ListCandidatesComponent },
      { path: 'create-candidate', component: CreateCandidateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatesRoutingModule { }
