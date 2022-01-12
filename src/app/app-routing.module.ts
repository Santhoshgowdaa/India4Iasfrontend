import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'admin',
    redirectTo: 'login',
    pathMatch: 'full',
  }, 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }, 
  {
    path: 'currentaffairs-dashboard',
    loadChildren: () =>
      import('./currentaffairs-dashboard/currentaffairs-dashboard.module').then(
        (m) => m.CurrentaffairsDashboardModule
      ),
  }, 
];

const routerOptions : ExtraOptions = { 
  useHash:true,
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
