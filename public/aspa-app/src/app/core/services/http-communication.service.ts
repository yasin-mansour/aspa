import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, RequestOptionsArgs, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {environment} from '../../../environments/environment';
import 'rxjs/add/operator/map';
import {ApiConstants} from "../../utils/api-constants";

@Injectable()
export class HttpCommunicationService {
  user;

  constructor(public http: Http) {

  }

  post(url: string, body: any, headers?: Headers, isFormUrl = true) {
    body._token = this.user.token;
    console.log(body);
    if (!headers) {
      headers = new Headers();
    }
    this.setHeaders(headers);

    let options: RequestOptions = new RequestOptions({headers: headers, withCredentials: true});
    body = isFormUrl ? this.objToFormUrlencoded(body) : body;
    return this.http.post(this.buildUrl(url), body, options)
      .map((data: Response) => this.handleResponse(data))
      .catch(this.handleErrors());
  }

  get(url: string) {
    return this.http.get(this.buildUrl(url))
      .map(response => response.json())
  }

  public handleErrors() {
    return (res: Response) => {


      return Observable.throw(res);
    };
  }

  buildUrl(url) {
    return environment.SERVER_NAME + url;
  }

  public setHeaders(objectToSetHeadersTo: Headers) {
    objectToSetHeadersTo.append('Content-Type', 'application/json');
  }

  public handleResponse(res: Response) {
    return res.json();
  }

  public setUser(user) {
    this.user = user;
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
}

