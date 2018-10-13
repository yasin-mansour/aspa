import {Component, Input, OnInit} from '@angular/core';
import {ResourceService} from '../../../../core/services/resource.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  test= 'aaaaaa';
  constructor(private resource: ResourceService) {
  }

  ngOnInit() {
  }
}
