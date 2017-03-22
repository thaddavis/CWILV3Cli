import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ChartModule } from '../charts/chart.module';

import { StudentRoutingModule }       from './student-routing.module';

import {
  ClassTestsForStudentsService,
  ClassStudentService,
  ClassOfTeacherService,
  TestService,
  QuestionService,
  TestResponseService
} from '../_services/index';

import { SanitizeHtmlPipe, TestResponsePercentagePipe } from '../_pipes/index';

import { StudentComponent } from './student.component';
import { BrowseQuestionsComponent } from './browse-questions/browse-questions.component';
import { OverviewComponent } from './overview/overview.component';
import { ReportsComponent } from './reports/reports.component';
import { TestsComponent } from './tests/tests.component';
import { TakeTestComponent } from './take-test/take-test.component';

import { FormsModule }    from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    ChartModule
  ],
  declarations: [
    StudentComponent,
    BrowseQuestionsComponent,
    OverviewComponent,
    ReportsComponent,
    TestsComponent,
    TakeTestComponent,
    SanitizeHtmlPipe,
    TestResponsePercentagePipe
  ],
  providers: [
    ClassTestsForStudentsService,
    ClassStudentService,
    ClassOfTeacherService,
    TestService,
    QuestionService,
    TestResponseService
  ]
})
export class StudentModule {}
