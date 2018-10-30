import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {HomeRoutingModule} from './home.routing.module';
import {
  HomeContainerComponent,
  HomeMenuComponent,
  RegisterComponent,
  WelcomePageComponent,
  CoursesComponent
} from './';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeMenuComponent,
    RegisterComponent,
    WelcomePageComponent,
    CoursesComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  providers: [],
  bootstrap: [],
  exports: []
})
export class HomeModule {
}
