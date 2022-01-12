import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/@core/http/dashboard.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-currenrt-affairs-archives-search',
  templateUrl: './currenrt-affairs-archives-search.component.html',
  styleUrls: ['./currenrt-affairs-archives-search.component.css']
})
export class CurrenrtAffairsArchivesSearchComponent implements OnInit {
  archivesDataList = [];
  fromArchiveDate: any;
  toArchiveDate: any;
  fromDate: string | number;
  toDate: string;
  pageData = {
    page: 1,
    pageSize: 10,
    collectionSize: 0,
  }
  showPagination = false;
  count: any;

  constructor(private dashboardService: DashboardService,
     private router: Router, public activatedroute: ActivatedRoute,) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      }

  ngOnInit(): void {
    this.activatedroute.queryParamMap.subscribe((params) => {
      this.fromDate = params.get('fromDate') || 0,
        this.toDate = params.get('toDate') || ''
    });
    this.getDataByArchivesFromAndToDate() 
  }

  getDataByArchivesFromAndToDate() {
    this.dashboardService.getArchivesByDate({
        fromDate: this.fromDate,
        toDate: this.toDate
    }).subscribe(response => {
      if(response) {
        this.count = response.data.count
        this.archivesDataList = response.data.rows;
      }
      if (this.count > this.pageData.pageSize) {
        this.showPagination = true
        this.pageData.collectionSize = this.count
      }
      else {
        this.showPagination = false
      }
    })
  }

  routeToViewByIdAndType(id, type) {
      this.router.navigate(['currentaffairs-dashboard/view'], {
        queryParams: { id: id, type: type },
      });
  }

}
