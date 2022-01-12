import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from 'src/app/@core/http/dashboard.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() pageData
  constructor(
  ) { }

  ngOnInit(): void {
  }
}