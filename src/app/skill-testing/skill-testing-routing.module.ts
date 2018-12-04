import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateSkillTestingComponent } from './create-skill-testing/create-skill-testing.component';
import { NavSkillTestingComponent } from './nav-skill-testing/nav-skill-testing.component';
import { ListSkillTestingComponent } from './list-skill-testing/list-skill-testing.component';

const routes: Routes = [
  {
    path: '', component: NavSkillTestingComponent,
    children: [
      { path: 'list-skill-testing', component: ListSkillTestingComponent },
      { path: 'create-skill-testing', component: CreateSkillTestingComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillTestingRoutingModule { }
