import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { ProfileComponent }    from './profile.component';
import { TeacherComponent }    from './roles/teacher.component';
import { StudentComponent }    from './roles/student.component';

import { ProfileRoutingModule }       from './profile-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  declarations: [
    ProfileComponent,
    TeacherComponent,
    StudentComponent
  ]
})
export class ProfileModule {}
