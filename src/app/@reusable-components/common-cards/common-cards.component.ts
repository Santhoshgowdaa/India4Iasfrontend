import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/@core/http/dashboard.service';
import { Router } from '@angular/router';
import { IMyDpOptions } from 'mydatepicker';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-common-cards',
  templateUrl: './common-cards.component.html',
  styleUrls: ['./common-cards.component.css']
})
export class CommonCardsComponent implements OnInit {
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd-mmm-yyyy',
    showTodayBtn: true,
    allowDeselectDate: true,
    height: '45px',
  };
  errorMsg: string;
  toArchiveDate: any;
  fromArchiveDate: any;
  dateList = [];
  importantEditorialsList = [];
  safeUrl;

  constructor(private dashboardService: DashboardService, private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/IHpzRNIHesI');
    this.getCurrentAffairsDatesByCA('CA');
    this.getCurrentAffairsByCatagoryType('Important Editorials')
  }

  redirect_view(id, type) {
    this.router.navigate(['currentaffairs-dashboard/view'], {
      queryParams: { id: id, type: type },
    });
  }

  redirect_view_withIdAndType(date, type) {
    this.router.navigate(['currentaffairs-dashboard/view'], {
      queryParams: { date: date, type: type },
    });
  }

  toArchiveDateChange(event) {
    this.errorMsg = '';
    this.toArchiveDate = event.formatted;
  }

  fromArchiveDateChange(event) {
    this.errorMsg = '';
    this.fromArchiveDate = event.formatted;
  }

  onSearchByArchives() {
    this.errorMsg = '';
    if (this.toArchiveDate == undefined || this.fromArchiveDate == undefined) {
      this.errorMsg = "* Please Select Date Range";
    } else {
      this.toArchiveDate = this.toArchiveDate.formatted;
      this.fromArchiveDate = this.fromArchiveDate.formatted;
      this.router.navigate(['currentaffairs-dashboard/archives-search'], {
        queryParams: { fromDate: this.fromArchiveDate, toDate: this.toArchiveDate },
      });
    }
  }

  
  getCurrentAffairsDatesByCA(type) {
    this.dashboardService.getCurrentAffairsDates(type).subscribe(response => {
      this.dateList = response.data;
    })
  }

  getCurrentAffairsByCatagoryType(type) {
    this.dashboardService.getCurrentAffairsByCatagoryType(type).subscribe(response => {
      this.importantEditorialsList = response.data;
    })
  }
}