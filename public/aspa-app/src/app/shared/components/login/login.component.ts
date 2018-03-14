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
        placeholder: 'E-mail',
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
        placeholder: 'Password',
        inputClass: 'form-control',
        containerClass: 'form-group',
        required: true,
        order: 1,
        type: 'password',
      },
      {
        value: '',
        key: 'remember',
        label: 'Remember Me',
        containerClass: 'checkbox',
        order: 1,
        type: 'checkbox',
        controlType: 'checkbox'
      }
    ];

    return json;

  }
}
