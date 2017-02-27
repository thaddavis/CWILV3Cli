import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent }           from './profile.component';
import { TeacherComponent }           from './roles/teacher.component';
import { StudentComponent }           from './roles/student.component';

import { ProfileGuard, AuthGuard } from '../_guards/index';

const profileRoutes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [ProfileGuard],
        children: [
          { path: '', pathMatch: 'full' },
          { path: 'teacher', component: TeacherComponent },
          { path: 'student', component: StudentComponent }
        ]
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
