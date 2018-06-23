import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientContainerComponent} from './';
import {RouteConstants} from '../utils/route-constants';

const clientRoutes: Routes = [
  {
    path: '',
    component: ClientContainerComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(
      clientRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class ClientRoutingModule {
}
