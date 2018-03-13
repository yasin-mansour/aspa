import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
  LoginComponent
} from './';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
  ],
  exports: [
    LoginComponent
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule {
}
