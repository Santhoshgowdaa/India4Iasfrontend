import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as config from './../api-endpoints/config';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  /* -------------------------------------------------------------------
 This method is to get category types
----------------------------------------------------------------------*/
  getCategoryType(): Observable<any> {
    return this.http.get(
      environment.apiUrl + config.rest_context_url.getcategorytype
    );
  }

  /* -------------------------------------------------------------------
This method is create current affairs
----------------------------------------------------------------------*/
  createCurrentAffairs(newData): Observable<any> {
    return this.http.post(
      environment.apiUrl + config.rest_context_url.createCurrentAffairs, newData
    );
  }


  /* -------------------------------------------------------------------
This method is get all current affairs
----------------------------------------------------------------------*/
  getAllCurrentAffairs(): Observable<any> {
    return this.http.get(
      environment.apiUrl + config.rest_context_url.getAllCurrentAffairs
    );
  }

  /* -------------------------------------------------------------------
This method is to get current affairs by id
----------------------------------------------------------------------*/
  getCurrentAffairsById(id): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id)
    return this.http.get(
      environment.apiUrl + config.rest_context_url.getcurrentaffairsbyid, { params: params }
    );
  }

  /* -------------------------------------------------------------------
This method is delete current affairs
----------------------------------------------------------------------*/
  deleteCurrentAffairs(reqPayload): Observable<any> {
    return this.http.post(
      environment.apiUrl + config.rest_context_url.deletecurrentaffairs, reqPayload
    );
  }

  /* -------------------------------------------------------------------
 This method is update current affairs
 ----------------------------------------------------------------------*/
  updateCurrentAffairs(updatedPayload): Observable<any> {
    return this.http.post(
      environment.apiUrl + config.rest_context_url.updateCurrentAffairs, updatedPayload
    );
  }

  /* -------------------------------------------------------------------
This method is for navigation
----------------------------------------------------------------------*/
  navigateCurrentAffairs(request): Observable<any> {
    return this.http.post(
      environment.apiUrl + config.rest_context_url.currentaffairsfornavigation, request
    );
  }

  /* -------------------------------------------------------------------
This method is for navigation
----------------------------------------------------------------------*/
  navigateCurrentAffairsByDate(request): Observable<any> {
    return this.http.post(
      environment.apiUrl + config.rest_context_url.currentaffairsnavigationfortypedate, request
    );
  }


  /* -------------------------------------------------------------------
This method is to get current affairs by date
----------------------------------------------------------------------*/
  getCurrentAffairsByDate(date): Observable<any> {
    let params = new HttpParams();
    params = params.append('date', date)
    return this.http.get(
      environment.apiUrl + config.rest_context_url.getCurrentAffairsByDate, { params: params }
    );
  }

  /* -------------------------------------------------------------------
This method is to get current affairs by tags
----------------------------------------------------------------------*/
  getCurrentAffairsByTag(tag): Observable<any> {
    let params = new HttpParams();
    params = params.append('tag', tag)
    return this.http.get(
      environment.apiUrl + config.rest_context_url.getcurrentaffairsbytag, { params: params }
    );
  }

  /* -------------------------------------------------------------------
This method is to download current affairs
----------------------------------------------------------------------*/
  downloadCurrentAffairs(id): Observable<any> {
    let params = new HttpParams();
    params = params.append('id', id)
    return this.http.get(
      environment.apiUrl + config.rest_context_url.downloadpdf, { params: params }
    );
  }

  /* -------------------------------------------------------------------
This method is get dates
----------------------------------------------------------------------*/
  getCurrentAffairsDates(type): Observable<any> {
    let params = new HttpParams();
    params = params.append('categorytype', type)
    return this.http.get(
      environment.apiUrl + config.rest_context_url.getdateforfoldername, { params: params }
    );
  }

  /* -------------------------------------------------------------------
This method is to get current affairs by date and catagory type
----------------------------------------------------------------------*/
  getCurrentAffairsByDateAndType(date, type): Observable<any> {
    const params = new HttpParams()
      .set('date', date)
      .set('categoryType', type);
    return this.http.get(
      environment.apiUrl + config.rest_context_url.getCurrentAffairsByDate, { params: params }
    );
  }

  /* -------------------------------------------------------------------
This method is to get current affairs by catagory
----------------------------------------------------------------------*/
  getCurrentAffairsByCatagoryType(type): Observable<any> {
    let params = new HttpParams();
    params = params.append('categorytype', type)
    return this.http.get(
      environment.apiUrl + config.rest_context_url.getCurrentAffairsbycatetorytype, { params: params }
    );
  }

  /* -------------------------------------------------------------------
This method to fetch details for Archives By Date
----------------------------------------------------------------------*/
  getArchivesByDate(payload): Observable<any> {
    return this.http.post(
      environment.apiUrl + config.rest_context_url.getdatafromtodate, payload
    );
  }

}
