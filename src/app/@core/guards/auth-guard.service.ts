import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from '../http/login.service';
// import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  id: string | number;
  token: string;
  constructor(private router: Router,
    private loginService: LoginService,
    public activatedroute: ActivatedRoute,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.token = sessionStorage.getItem('token')
    if (!this.token) {
      this.router.navigateByUrl('admin');
      return false;
    }
    else {
      return true;
    }
  }
}
