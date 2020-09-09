import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListModule } from './list/list.module';
import { IsNotSignedInGuard } from './Guards/is-signed-in.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () =>import('./user/user.module')
    .then(mod=>mod.UserModule)
  },
  {
    path: 'list',
    loadChildren: () =>import('./list/list.module')
    .then(mod=>mod.ListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
