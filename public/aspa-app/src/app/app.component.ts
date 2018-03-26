import {Component, OnInit} from '@angular/core';
import {ApiConstants} from './utils/api-constants';
import {LocalizationService} from './core/services/localization.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appStyle = {};

  constructor(private localization: LocalizationService){
    localization.setDirectionCallback = this.setDirection.bind(this);
  }

  ngOnInit() {
  }

  setDirection(direction){
    this.appStyle = {'direction': direction};
  }
}
