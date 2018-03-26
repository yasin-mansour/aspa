import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import ApiManager from '../../../core/classes/api-manager';
import * as _ from 'lodash';
import {AdminService} from '../../services/admin.service';
import {HttpCommunicationService} from '../../../core';
import {ApiConstants} from "../../../utils/api-constants";

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
    {field: 'languages.1.translation', header: 'en'},
    {field: 'languages.2.translation', header: 'ar'}
  ];

  words;
  newRecord = [
    {
      key: 'new',
      languages: {
        1: {
          translation: ''
        },
        2: {
          translation: ''
        }
      }
    }
  ];
  api;
  newWord;

  constructor(private adminService: AdminService, private httpCommunicationService: HttpCommunicationService) {
    this.api = new ApiManager(ApiConstants.WORDS_API, httpCommunicationService);
    this.newWord = _.cloneDeep(this.newRecord);
  }

  ngOnInit() {
    this.getWords();
    this.items = this.getMenuItems();
  }

  getMenuItems() {
    const items = [
      {
        icon: 'fa-refresh',
        command: (event) => {
          this.api.sync();
        }
      },
      {
        icon: 'fa-plus'
      },
      {
        icon: 'fa-cog',
        command: (event) => {
          this.adminService.generateLocalization().subscribe();
        }
      },
      {
        icon: 'fa-times'
      }
    ];

    return items;
  }

  getWords() {
    this.adminService.words().subscribe((data) => {
      this.words = data;
    });
  }

  update(event) {
    console.log(event);
  }

  apiInsert(object){
    this.newWord = _.cloneDeep(this.newRecord);
   this.words.unshift(object);
   this.api.insert(object);
  }

}
