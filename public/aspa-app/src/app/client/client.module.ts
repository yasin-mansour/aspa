import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ClientRoutingModule} from './client.routing.module';
import {DashboardComponent, ClientContainerComponent} from './';

@NgModule({
  declarations: [
    ClientContainerComponent,
    DashboardComponent
  ],
  imports: [
    SharedModule,
    ClientRoutingModule
  ],
  providers: [
  ],
  bootstrap: [],
  exports: [
  ]
})
export class ClientModule { }
