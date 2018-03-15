import {Component, OnInit} from '@angular/core';
import {ApiConstants} from '../../../utils/api-constants';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
    console.log(this.router.config);
  }

}
