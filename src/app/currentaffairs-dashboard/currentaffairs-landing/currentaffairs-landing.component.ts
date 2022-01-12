import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DashboardService } from 'src/app/@core/http/dashboard.service';
import { Router } from '@angular/router';
import { IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'app-currentaffairs-landing',
  templateUrl: './currentaffairs-landing.component.html',
  styleUrls: ['./currentaffairs-landing.component.css']
})
export class CurrentaffairsLandingComponent implements OnInit {
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd-mmm-yyyy',
    showTodayBtn: true,
    allowDeselectDate: true,
    height: '45px',
  };
  latestFiveAffairs = [];
  importantEditorialsList = [];
  date: any;
  dateList = [];
  type: string;
  dateIE: any;

  constructor(private dashboardService: DashboardService, private router: Router) { }

  ngOnInit(): void {
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

  onDateChanged(event) {
    this.date = event.formatted;
    this.type = 'CA';
  }

  onDateChange(event) {
    this.dateIE = event.formatted;
    this.type = 'Important Editorials'
  }

  onSearchOldNews() {
    this.date = this.date.formatted
    this.router.navigate(['currentaffairs-dashboard/view'], {
      queryParams: { date: this.date, type: this.type },
    });
  }

  onSearchOldNewsForIE() {
    this.dateIE = this.dateIE.formatted
    this.router.navigate(['currentaffairs-dashboard/view'], {
      queryParams: { date: this.dateIE, type: this.type },
    });
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
