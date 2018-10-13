import {Component, Input, OnInit} from '@angular/core';
import {ResourceService} from '../../../../core/services/resource.service';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.css']
})
export class HomeMenuComponent implements OnInit {
  activeCourseCategory = 0;
  activeMaterialCategory = 0;

  constructor(public resource: ResourceService) {
  }

  ngOnInit() {
  }
}
