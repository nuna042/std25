import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTestersComponent } from './list-testers/list-testers.component';
import { CreateTesterComponent } from './create-tester/create-tester.component';
import { NavTesterComponent } from './nav-tester/nav-tester.component';

const routes: Routes = [
  {
    path: '', component: NavTesterComponent,
    children: [
      { path: 'list-testers', component: ListTestersComponent },
      { path: 'create-tester', component: CreateTesterComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestersRoutingModule { }
