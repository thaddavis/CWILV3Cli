import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { TeacherRoutingModule }       from './teacher-routing.module';

import { QuestionService, GradeStandardService } from '../_services/index';

import { TeacherComponent } from './teacher.component';
import { BrowseQuestionsComponent } from './browse-questions/browse-questions.component';
import { OverviewComponent } from './overview/overview.component';
import { ReportsComponent } from './reports/reports.component';
import { TestsComponent } from './tests/tests.component';
import { QuestionComponent } from './question/question.component';

import { StandardCleanerPipe } from '../_pipes/index';

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
    TestsComponent,
    QuestionComponent,
    StandardCleanerPipe
  ],
  providers: [
    QuestionService,
    GradeStandardService
  ]
})
export class TeacherModule {}
