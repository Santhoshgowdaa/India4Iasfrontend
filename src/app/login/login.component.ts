import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../@core/http/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  emailPhone: string;
  password: string;
  userData: any;
  response: any;
  errorMsg: string;


  constructor(
    private router: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {

  }

  redirect_register() {
    this.router.navigateByUrl('login/register');
  }

  redirect_forgot_password() {
    this.router.navigateByUrl('login/forgot-password');
  }

  login() {
    var reg = /^[0-9]*$/;
    if (reg.test(this.emailPhone)) {
      this.userData = {
        phone: this.emailPhone,
        password: this.password
      }
    } else {
      this.userData = {
        email: this.emailPhone,
        password: this.password
      }
    }
    this.loginService.login(this.userData).subscribe(res => {
      this.response = res;
      if (this.response) {
        if (this.response.message === 'Login Success') {
          this.loginService.userData.token = this.response.data.token;
          sessionStorage.setItem('token', this.response.data.token);
          sessionStorage.setItem('id', this.response.data.id);
          this.router.navigateByUrl('currentaffairs-dashboard');
        }
      } else {
        this.router.navigateByUrl('');
      }
    },
      (error) => {
        if (error.error.status == 400 || error.error.message == 'Invalid credentials') {
          this.errorMsg = 'Username or Password is Incorrect'
        }
      }
    )
  }
}
