import {Component, OnInit} from '@angular/core';
import {HttpCommunicationService} from 'app/core/services/http-communication.service';
import {ApiConstants} from './utils/api-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private httpCommunicationService: HttpCommunicationService) {

  }

  ngOnInit() {
    this.httpCommunicationService.post(ApiConstants.REGISTER_USER, {
      name: 'yasin3',
      email: 'yasenmansor3@yahoo.com',
      password: '123456',
      password_confirmation: '123456'
    }).subscribe(data => {
      console.log(data);
    });

  }

  logOut() {
    this.httpCommunicationService.get(ApiConstants.LOGOUT_USER).subscribe(data => {
      console.log(data);
    });
  }
}
