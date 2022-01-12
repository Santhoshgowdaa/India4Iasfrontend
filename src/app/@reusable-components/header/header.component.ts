import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect_login() {
    this.router.navigateByUrl('');
    sessionStorage.clear();
     
  }
}