import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { TasklistComponent } from './tasklist/tasklist.component';


const routes: Routes = [
  { path: 'update/:_id', component: UpdateComponent },
  { path: 'tasklist', component: TasklistComponent },
  { path: '', component: TasklistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
