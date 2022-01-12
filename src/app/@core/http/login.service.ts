import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as config from './../api-endpoints/config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userData = {
    token: ''
  }


  constructor(private http: HttpClient) {
  }


  /* -------------------------------------------------------------------
 This method is to login
----------------------------------------------------------------------*/
  login(userData): Observable<any> {
    return this.http.post(
      environment.apiUrl + config.rest_context_url.login, userData
    );
  }
}
