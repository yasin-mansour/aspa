import {Component, Input, OnInit} from '@angular/core';
import {ResourceService, HttpCommunicationService, LogoutService} from '../../../../core';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.css']
})
export class HomeMenuComponent implements OnInit {
  activeCourseCategory = 0;
  activeMaterialCategory = 0;

  constructor(public resource: ResourceService,
              public http: HttpCommunicationService,
              private logout: LogoutService) {
  }

  ngOnInit() {
  }

  logoutUser() {
    this.logout.logout();
  }
}
