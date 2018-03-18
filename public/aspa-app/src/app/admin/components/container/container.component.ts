import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class AdminContainerComponent implements OnInit {

  readonly DASHBOARD_KEY: string = 'dashboard';
  readonly LOCALIZATION_KEY: string = 'localization';
  readonly TASKS_KEY: string = 'tasks';
  readonly LEFT_SPLIT_KEY: string = 'left';
  splitAreas = {};

  constructor() {
    this.splitAreas = this.getSplitObject();
  }

  ngOnInit() {
  }

  getSplitObject() {
    const split = {};
    split[this.DASHBOARD_KEY] = {
      size: 70,
      visible: true
    };
    split[this.TASKS_KEY] = {
      size: 30,
      visible: true
    };
    split[this.LOCALIZATION_KEY] = {
      size: 40,
      visible: true
    };
    split[this.LEFT_SPLIT_KEY] = {
      size: 60,
      visible: true
    };
    return split;
  }
}
