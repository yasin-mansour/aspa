import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {
  @Input() menuBar;
  @Output() menuBarChange = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onMenuClick() {
    this.menuBar = !this.menuBar;
    this.menuBarChange.emit(this.menuBar);
  }
}
