import {Component, Input, OnInit} from '@angular/core';
import {ResourceService} from '../../../core/services/resource.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private resource: ResourceService) {
  }

  ngOnInit() {
  }
}
