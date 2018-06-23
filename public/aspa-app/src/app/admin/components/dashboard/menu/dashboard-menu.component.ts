import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.css']
})
export class DashboardMenuComponent implements OnInit {
  @Input() menuBar;

  constructor() {
  }

  ngOnInit() {
  }
}
