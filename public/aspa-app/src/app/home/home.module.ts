import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {HomeRoutingModule} from './home.routing.module';
import {
  HomeContainerComponent,
  HomeMenuComponent
} from './';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeMenuComponent
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
