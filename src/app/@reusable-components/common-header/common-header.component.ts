import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.css']
})
export class CommonHeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  redirectToLanding() {
    this.router.navigateByUrl('/currentaffairs-dashboard/landing');
  }
}
