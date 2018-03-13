import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, RequestOptionsArgs, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {environment} from '../../../environments/environment';
import 'rxjs/add/operator/map';
import {ApiConstants} from "../../utils/api-constants";

@Injectable()
export class HttpCommunicationService {
  token: string;

  constructor(public http: Http) {
    this.getToken();
  }

  post(url: string, body: any, headers?: Headers) {

    if (!headers) {
      headers = new Headers();
    }
    this.setHeaders(headers);

    let options: RequestOptions = new RequestOptions({headers: headers, withCredentials: true});
    return this.http.post(this.buildUrl(url), body, options)
      .map((data: Response) => this.handleResponse(data))
      ;
  }

  get(url: string) {
    return this.http.get(this.buildUrl(url)).map(response => response.json());
  }

  buildUrl(url) {
    return environment.SERVER_NAME + url;
  }

  public setHeaders(objectToSetHeadersTo: Headers) {
    objectToSetHeadersTo.append('Content-Type', 'application/x-www-form-urlencoded');
  }

  public handleResponse(res: Response) {
    return res.json();
  }

  private getToken() {
    this.get(ApiConstants.TOKEN_PATH).subscribe(data => {
      this.token = data.token;
    });
  }
}

