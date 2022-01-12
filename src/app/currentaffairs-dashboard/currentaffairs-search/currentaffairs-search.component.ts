import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from 'src/app/@core/http/dashboard.service';

@Component({
  selector: 'app-currentaffairs-search',
  templateUrl: './currentaffairs-search.component.html',
  styleUrls: ['./currentaffairs-search.component.css']
})
export class CurrentaffairsSearchComponent implements OnInit {
  date: string | number;
  currentAffairsDetails = [];
  name: boolean;
  tag: string | number;

  constructor(public activatedroute: ActivatedRoute, private dashboardService: DashboardService,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedroute.queryParamMap.subscribe((params) => {
      this.date = params.get('date') || 0,
        this.tag = params.get('tag') || 0
    });
    if (this.date != 0) {
      this.name = true;
      this.getCurrentAffairsById(this.date);
    } else {
      this.name = false;
      this.getCurrentAffairsByTag(this.tag);
    }
  }

  getCurrentAffairsById(date) {
    this.dashboardService.getCurrentAffairsByDate(date).subscribe(response => {
      this.currentAffairsDetails = response.data;
      this.currentAffairsDetails.forEach(data => {
        if (data.currentAffairsDate) {
          data.date = data.currentAffairsDate.substring(0, 10);
        }
      })
    })
  }

  getCurrentAffairsView(id) {
    this.router.navigate(['currentaffairs-dashboard/view'], {
      queryParams: { id: id },
    });
  }

  getCurrentAffairsByTag(tag) {
    this.dashboardService.getCurrentAffairsByTag(tag).subscribe(res => {
      this.currentAffairsDetails = res.data;
      this.currentAffairsDetails.forEach(data => {
        if (data.currentAffairsDate) {
          data.date = data.currentAffairsDate.substring(0, 10);
        }
      })
    })
  }

}
