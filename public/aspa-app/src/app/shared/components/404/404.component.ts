import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-s404',
  templateUrl: './404.component.html'
})
export class S404Component {

  constructor(private router: Router){
    console.log(router.config);
  }
}
