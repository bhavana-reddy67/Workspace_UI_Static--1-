import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     "Content-Type": "application/json",
  //     // "Access-Control-Allow-Origin": "*",
  //   }),
  // };

  constructor(private http: HttpClient) { }

  public get(filter: any): Observable<any> {
    //let queryParams = this.setParameter(filter);
    return this.http.get<any>(`${environment.apiUrl}/users`, { params: filter });
  }

  // private setParameter(routerParams: GetParamDataObj): HttpParams {
  //   let queryParams = new HttpParams();
  //   for (const key in routerParams) {
  //     if (routerParams.hasOwnProperty(key)) {
  //       queryParams = queryParams.set(key, routerParams[key]);
  //     }
  //   }
  //   return queryParams;
  // }
}
