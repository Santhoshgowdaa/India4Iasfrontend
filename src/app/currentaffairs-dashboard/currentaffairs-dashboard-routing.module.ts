import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentaffairsDashboardComponent } from './currentaffairs-dashboard.component';
import { CurrentaffairsLandingComponent } from './currentaffairs-landing/currentaffairs-landing.component';
import { CurrentaffairsViewComponent } from './currentaffairs-view/currentaffairs-view.component';
import { AuthGuard } from '../@core/guards/auth-guard.service';
import { CurrentaffairsSearchComponent } from './currentaffairs-search/currentaffairs-search.component';
import { CurrenrtAffairsArchivesSearchComponent } from './currenrt-affairs-archives-search/currenrt-affairs-archives-search.component';

const routes: Routes = [
  {
    path: '',
    component: CurrentaffairsDashboardComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'landing',
    component: CurrentaffairsLandingComponent,
  },
  {
    path: 'view',
    component: CurrentaffairsViewComponent,
  },
  {
    path: 'search',
    component: CurrentaffairsSearchComponent,
  },
  {
    path: 'archives-search',
    component: CurrenrtAffairsArchivesSearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentaffairsDashboardRoutingModule { }
