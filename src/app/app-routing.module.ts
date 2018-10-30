import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TesterComponent } from './components/tester/tester.component';
import { TestingComponent } from './components/testing/testing.component';

const routes: Routes = [
  {path: 'tester', component: TesterComponent},
  {path: 'testing', component: TestingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TesterComponent, TestingComponent]