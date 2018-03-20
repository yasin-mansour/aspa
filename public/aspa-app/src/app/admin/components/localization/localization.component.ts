import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import ApiManager from '../../../core/classes/api-manager';
import * as _ from 'lodash';

@Component({
  selector: 'app-localization',
  templateUrl: './localization.component.html',
  styleUrls: ['./localization.component.css']
})
export class LocalizationComponent implements OnInit {
  items: MenuItem[];
  _ = _;
  cols = [
    {field: 'key', header: 'key'},
    {field: 'en.name', header: 'en'},
    {field: 'ar.name', header: 'ar'}
  ];

  words = [{
    key: 'test',
    en: {id: 1, name: 'test'},
    ar: {id: 1, name: 'test'},
  }];
  newWord = [
    {
      key: '',
      en: '',
      ar: '',
    }
  ];

  constructor() {
    let api = new ApiManager('/word');
  }

  ngOnInit() {
    this.items = this.getMenuItems();
  }

  getMenuItems() {
    const items = [
      {
        icon: 'fa-refresh'
      },
      {
        icon: 'fa-plus'
      },
      {
        icon: 'fa-cog'
      },
      {
        icon: 'fa-times'
      }
    ];

    return items;
  }
}
