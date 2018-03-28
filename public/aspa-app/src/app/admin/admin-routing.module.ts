import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteConstants} from '../utils/route-constants';
import {AdminContainerComponent} from './components/container/container.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminContainerComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(
      adminRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {
}
