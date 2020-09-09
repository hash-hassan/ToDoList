import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { IsNotSignedInGuard } from '../Guards/is-signed-in.guard'

const routes: Routes = [
  {
    path: '',
    component: SignupComponent,
    canActivate: [IsNotSignedInGuard] 
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
