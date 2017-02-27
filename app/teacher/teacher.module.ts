import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { TeacherRoutingModule }       from './teacher-routing.module';

import { TeacherComponent } from './teacher.component';
import { BrowseQuestionsComponent } from './browse-questions/browse-questions.component';
import { OverviewComponent } from './overview/overview.component';
import { ReportsComponent } from './reports/reports.component';
import { TestsComponent } from './tests/tests.component';

import { FormsModule }    from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule
  ],
  declarations: [
    TeacherComponent,
    BrowseQuestionsComponent,
    OverviewComponent,
    ReportsComponent,
    TestsComponent
  ]
})
export class TeacherModule {}
