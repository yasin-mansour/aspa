import {Component, Input, OnInit} from '@angular/core';
import {AdminService} from '../../../services/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.css']
})
export class DashboardComponent implements OnInit {
  menuBar = true;

  constructor(private admin: AdminService) {
    this.admin.resource();
  }

  ngOnInit() {
  }
}
