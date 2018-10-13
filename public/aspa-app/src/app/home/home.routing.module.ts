import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeContainerComponent} from './';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeContainerComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(
      homeRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {
}
