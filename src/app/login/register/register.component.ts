import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  redirect_login() {
    this.router.navigateByUrl('');
  }

  redirect_forgot_password() {
    this.router.navigateByUrl('login/forgot-password');
  }

}
