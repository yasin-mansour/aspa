import {Component, OnInit} from '@angular/core';
import {ApiConstants} from './utils/api-constants';
import {HttpCommunicationService, LocalizationService, ErrorHandlerService} from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appStyle = {};
  loader = false;
  error;

  constructor(private localization: LocalizationService,
              private http: HttpCommunicationService,
              private errorHandler: ErrorHandlerService) {
    localization.setDirectionCallback = this.setDirection.bind(this);
    http.showLoader = this.showLoader.bind(this);
    http.hideLoader = this.hideLoader.bind(this);
    errorHandler.handleError = this.handleError.bind(this);
  }

  ngOnInit() {
  }

  setDirection(direction) {
    this.appStyle = {'direction': direction};
  }

  showLoader() {
    this.loader = true;
  }

  hideLoader() {
    this.loader = false;
  }

  handleError(error) {
    this.error = error;
  }
}
