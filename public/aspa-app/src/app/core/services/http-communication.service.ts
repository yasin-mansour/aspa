import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {environment} from '../../../environments/environment';
import 'rxjs/add/operator/map';
import {ApiConstants} from "../../utils/api-constants";

@Injectable()
export class HttpCommunicationService {
  clientData;

  public get user() {
    return this.clientData.user;
  }

  constructor(public http: HttpClient) {

  }

  post(url: string, body: any, headers?: HttpHeaders, isFormUrl = true) {

    if (!headers) {
      headers = new HttpHeaders();
    }
    this.setHeaders(headers);

    const options = {headers: headers};
    body = isFormUrl ? this.objToFormUrlencoded(body) : body;
    return this.http.post(this.buildUrl(url), body, options)
      .map((data: HttpResponse<any>) => this.handleResponse(data))
      .catch(this.handleErrors());
  }

  get(url: string, data: any = {}) {
    const parameter = this.getParameter(data);
    return this.http.get(this.buildUrl(url), parameter)
      .map(response => response);
  }

  public handleErrors() {
    return (res: HttpResponse<any>) => {


      return Observable.throw(res);
    };
  }

  buildUrl(url) {
    return environment.SERVER_NAME + url;
  }

  public setHeaders(objectToSetHeadersTo: HttpHeaders) {
    objectToSetHeadersTo.append('Content-Type', 'application/json');
  }

  public handleResponse(res: HttpResponse<any>) {
    return res;
  }

  public setUser(user) {
    this.clientData = user;
  }

  objToFormUrlencoded(object) {
    const keys = Object.keys(object);

    const urlEncoded = [];

    keys.map(key => {
      const parameter = key + '=' + object[key];
      urlEncoded.push(parameter);
    });

    return urlEncoded.join('&');
  }

  getParameter(data) {
    let params = new HttpParams();
    if (data) {
      Object.keys(data).map(key => {
        if (data[key]) {
          params = params.append(key, data[key]);
        }
      });
    }
    return {params};
  }
}

