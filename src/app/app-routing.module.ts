import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTesterComponent } from './components/tester/create-tester.component';
import { ListTestersComponent } from './components/tester/list-testers.component';

const routes: Routes = [
  { path: 'create-tester', component: CreateTesterComponent },
  { path: 'list-testers', component: ListTestersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents = [CreateTesterComponent, ListTestersComponent]