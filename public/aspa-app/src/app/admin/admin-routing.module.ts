import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteConstants} from '../utils/route-constants';
import {AdminContainerComponent} from './components/container/container.component';
import {HomePageComponent, ClassesComponent, ClassComponent} from './index';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminContainerComponent,
    children: [
      {
        path: 'dashboard',
        component: HomePageComponent
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'classes',
        component: ClassesComponent
      },
      {
        path: 'class/:id',
        component: ClassComponent
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
