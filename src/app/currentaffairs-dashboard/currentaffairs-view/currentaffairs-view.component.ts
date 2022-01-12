import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/@core/http/dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-currentaffairs-view',
  templateUrl: './currentaffairs-view.component.html',
  styleUrls: ['./currentaffairs-view.component.css']
})
export class CurrentaffairsViewComponent implements OnInit {
  currentAffairsDetails = [];
  dateAndTypeList = [];
  id: any;
  content: any;
  description: any;
  tags: any;
  disableNextBtn: boolean;
  disablePrevBtn: boolean;
  date: string | number;
  type: string | number;
  dateContent: boolean;

  constructor(private dashboardService: DashboardService, public activatedroute: ActivatedRoute,
    private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.activatedroute.queryParamMap.subscribe((params) => {
      this.id = params.get('id') || 0,
        this.date = params.get('date') || 0,
        this.type = params.get('type') || ''
    });
    if (this.id) {
      this.getCurrentAffairsById(this.id, this.type);
    }
    if (this.date != 0 && this.type != 0) {
      this.getCurrentAffairsByDateAndType(this.date, this.type);
    }
  }

  getCurrentAffairsById(id, type) {
    this.dateContent = false;
    this.dashboardService.getCurrentAffairsById(id).subscribe(res => {
      this.content = res.data.content;
      this.description = res.data.description
      this.tags = res.data.tags;
    })
    this.router.navigate(['currentaffairs-dashboard/view'], {
      queryParams: { id: id, type: type },
    });
  }

  navigateCurrentAffairsById(action) {
    this.activatedroute.queryParamMap.subscribe((params) => {
      this.id = params.get('id') || 0,
        this.type = params.get('type') || ''
    });
    this.dashboardService.navigateCurrentAffairs({
      currentId: this.id,
      action: action,
      categoryType: this.type
    }).subscribe(response => {
      if (response) {
        this.disableNextBtn = false;
        this.disablePrevBtn = false;
        this.content = response.data.content;
        this.description = response.data.description
        this.tags = response.data.tags;
        this.router.navigate(['currentaffairs-dashboard/view'], {
          queryParams: { id: response.data.id, type: response.data.categoryType },
        });
      }
    }, (error) => {
      if (error.status == 404 && action == 'next') {
        this.disableNextBtn = true;
        this.disablePrevBtn = false;
      } else if (error.status == 404 && action == 'prev') {
        this.disablePrevBtn = true;
        this.disableNextBtn = false;
      }
    }
    )
  }

  navigateCurrentAffairsByDate(action) {
    this.activatedroute.queryParamMap.subscribe((params) => {
      this.date = params.get('date') || 0,
        this.type = params.get('type') || 0
    });
    this.dashboardService.navigateCurrentAffairsByDate({
      currentAffDate: this.date,
      categorytype: this.type,
      action: action
    }).subscribe(response => {
      if (response.data != 0) {
        this.disableNextBtn = false;
        this.disablePrevBtn = false;
        this.dateContent = true;
        this.dateAndTypeList = response.data;
        this.router.navigate(['currentaffairs-dashboard/view'], {
          queryParams: { date: this.dateAndTypeList[0].currentAffairsDate, type: this.dateAndTypeList[0].categoryType },
        });
      } else {
        if (action == 'next') {
          this.disableNextBtn = true;
          this.disablePrevBtn = false;
        } else {
          this.disableNextBtn = false;
          this.disablePrevBtn = true;
        }
      }
    })
  }

  onSearchByTag(tag) {
    this.router.navigate(['currentaffairs-dashboard/search'], {
      queryParams: { tag: tag },
    });
  }

  getCurrentAffairsByDateAndType(date, type) {
    this.dashboardService.getCurrentAffairsByDateAndType(date, type).subscribe(res => {
      this.dateContent = true;
      this.dateAndTypeList = res.data;
    })
  }

  downloadCA() {
    this.dashboardService.downloadCurrentAffairs(this.id).subscribe(response => {
    })
  }

}
