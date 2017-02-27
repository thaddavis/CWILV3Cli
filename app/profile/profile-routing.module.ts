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
        //,
        //children: [
        //  { path: '', redirectTo: 'student', pathMatch: 'full' },
        //  { path: 'teacher', component: TeacherComponent },
        //  { path: 'student', component: StudentComponent }
        //]
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
