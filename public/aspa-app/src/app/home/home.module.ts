import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {HomeRoutingModule} from './home.routing.module';
import {HomePageComponent} from './';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  providers: [
  ],
  bootstrap: [],
  exports: [
  ]
})
export class HomeModule { }
