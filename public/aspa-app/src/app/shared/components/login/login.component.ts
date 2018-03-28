import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginConfig = [];

  ngOnInit() {
    this.loginConfig = this.getLoginJson();
  }

  getLoginJson() {

    const json = [
      {
        value: '',
        key: 'email',
        label: 'user name',
        placeholder: 'LOGIN.SIGN_IN_EMAIL',
        inputClass: 'form-control',
        containerClass: 'form-group',
        required: true,
        order: 1,
        controlType: 'textbox',
      },
      {
        value: '',
        key: 'password',
        label: 'user name',
        placeholder: 'LOGIN.SIGN_IN_PASSWORD',
        inputClass: 'form-control',
        containerClass: 'form-group',
        required: true,
        order: 1,
        type: 'password',
      }/*,
      {
        value: false,
        key: 'remember',
        label: 'Remember Me',
        containerClass: 'checkbox',
        order: 1,
        type: 'checkbox',
        controlType: 'checkbox'
      }*/
      ,
      {
        key: 'login',
        label: 'LOGIN.SIGN_IN_BUTTON',
        inputClass: 'btn btn-lg btn-success btn-block',
        order: 1,
        controlType: 'button',
        outForm: true,
        submitActions: [
          {
            type: 'request',
            requestType: 'post',
            uri: '/login',
            isAbsoluteUri: false
          }
        ],
        responseActions: [
          {
            type: 'redirect',
            uri: 'admin',
          }
        ]
      }
    ];

    return json;

  }
}
