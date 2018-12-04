import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'testers', loadChildren: './testers/testers.module#TestersModule' },
  { path: 'candidates', loadChildren: './candidates/candidates.module#CandidatesModule' },
  { path: 'skill-testing', loadChildren: './skill-testing/skill-testing.module#SkillTestingModule' },
  { path: 'cert', loadChildren: './cert/cert.module#CertModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents = [CreateTesterComponent, ListTestersComponent]