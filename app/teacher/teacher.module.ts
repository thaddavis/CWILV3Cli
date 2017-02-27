import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { TeacherRoutingModule }       from './teacher-routing.module';

import { TeacherComponent } from './teacher.component';

import { FormsModule }    from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule
  ],
  declarations: [
    TeacherComponent
  ]
})
export class TeacherModule {}
