import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { CommonFooterComponent } from './common-footer/common-footer.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';
import { CommonCardsComponent } from './common-cards/common-cards.component';
import { MyDatePickerModule } from 'mydatepicker';



@NgModule({
  declarations: [HeaderComponent, CommonHeaderComponent, CommonFooterComponent, PaginationComponent, ModalComponent, CommonCardsComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    MyDatePickerModule
  ],
  exports: [
    HeaderComponent,
    ModalComponent,
    CommonHeaderComponent,
    CommonFooterComponent,
    PaginationComponent,
    CommonCardsComponent
  ], 
  schemas: [NO_ERRORS_SCHEMA]
})
export class ReusableModule { }
