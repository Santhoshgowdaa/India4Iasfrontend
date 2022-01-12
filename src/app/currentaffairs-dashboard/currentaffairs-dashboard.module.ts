import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CurrentaffairsDashboardRoutingModule } from './currentaffairs-dashboard-routing.module';
import { CurrentaffairsDashboardComponent } from './currentaffairs-dashboard.component';
import { FormsModule } from '@angular/forms';
import { ReusableModule } from '../@reusable-components/reusable.module';
import { MyDatePickerModule } from 'mydatepicker';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {NgxPopperjsModule} from 'ngx-popperjs';
import { CurrentaffairsLandingComponent } from './currentaffairs-landing/currentaffairs-landing.component';
import { CurrentaffairsViewComponent } from './currentaffairs-view/currentaffairs-view.component';
import { CurrentaffairsSearchComponent } from './currentaffairs-search/currentaffairs-search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrenrtAffairsArchivesSearchComponent } from './currenrt-affairs-archives-search/currenrt-affairs-archives-search.component';


@NgModule({
  declarations: [CurrentaffairsDashboardComponent, CurrentaffairsLandingComponent, CurrentaffairsViewComponent, CurrentaffairsSearchComponent, CurrenrtAffairsArchivesSearchComponent],
  imports: [
    CommonModule,
    CurrentaffairsDashboardRoutingModule,
    FormsModule,
    ReusableModule,
    MyDatePickerModule,
    CKEditorModule,
    NgbModule,
    NgxPopperjsModule.forRoot ({
      applyClass: 'popperStyles',
    }),
  ],
  providers: [DatePipe]
})
export class CurrentaffairsDashboardModule { }
