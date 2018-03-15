import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent {

  components;
  constructor(route: ActivatedRoute) {
    this.components = route.snapshot.data || [];
  }
}
