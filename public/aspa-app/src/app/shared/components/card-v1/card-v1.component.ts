import {Component, Input, OnInit} from '@angular/core';
import {CardV1} from '../../interfaces/card-v1.interface'
@Component({
  selector: 'app-card-v1',
  templateUrl: './card-v1.component.html',
  styleUrls: ['./card-v1.component.css']
})
export class CardV1Component {
  @Input() options: CardV1;

  constructor() {
  }

  click() {
    if (this.options.click) {
      this.options.click();
    }
  }
}
