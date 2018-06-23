import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteConstants} from '../utils/route-constants';
import {AdminContainerComponent} from './components/container/container.component';
import {HomePageComponent} from './index';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminContainerComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      }
    ]
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
