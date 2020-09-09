import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoComponent } from './to-do/to-do.component'
import { AuthGuardGuard } from '../auth-guard.guard'
import { IsSelectedGuard } from '../is-selected.guard'
import { IsNotSignedInGuard } from '../is-signed-in.guard';

const routes: Routes = [
  {
    path: '',
    component: ToDoComponent,
    canActivate: [AuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
