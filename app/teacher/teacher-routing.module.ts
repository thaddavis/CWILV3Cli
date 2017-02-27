import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeacherComponent }           from './teacher.component';

import { TeacherGuard } from '../_guards/index';

const teacherRoutes: Routes = [
  {
    path: '',
    component: TeacherComponent,
    children: [
      {
        path: ''
        children: [
          { path: '', pathMatch: 'full' },
          { path: 'browse-questions', component: TeacherComponent },
        //  { path: 'student', component: StudentComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(teacherRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TeacherRoutingModule {}
