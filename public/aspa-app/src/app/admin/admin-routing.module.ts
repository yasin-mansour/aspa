import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteConstants} from '../utils/route-constants';
import {AdminContainerComponent} from './components/container/container.component';
import {HomePageComponent, CoursesComponent, CourseComponent} from './index';

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
        path: 'courses',
        component: CoursesComponent
      },
      {
        path: 'course/:id',
        component: CourseComponent
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
