import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginConfig = [];
  ngOnInit() {
    // this.loginConfig = this.getLoginJson();
  }

  getLoginJson() {

    const json = [
      {
        value: '',
        key: 'userName',
        label: 'user name',
        required: true,
        order: 1,
        controlType: 'textbox',
        name: 'userName'
      },
      {
        value: '',
        key: 'password',
        label: 'password',
        required: true,
        order: 2,
        controlType: 'textbox',
        name: 'password'
      }
    ];

    return json;

  }
}
