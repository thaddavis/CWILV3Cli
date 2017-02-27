import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent }           from './profile.component';


import { ProfileGuard } from '../_guards/index';

const profileRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: ''
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(profileRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProfileRoutingModule {}
