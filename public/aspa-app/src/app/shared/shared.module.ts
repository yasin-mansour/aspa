import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {
  LoginComponent,
  AuthComponent
} from './';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule
  ],
  exports: [
    LoginComponent,
    AuthComponent
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule {
}
