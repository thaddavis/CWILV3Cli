import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { StudentRoutingModule }       from './student-routing.module';

import { StudentComponent } from './student.component';
import { BrowseQuestionsComponent } from './browse-questions/browse-questions.component';
import { OverviewComponent } from './overview/overview.component';
import { ReportsComponent } from './reports/reports.component';
import { TestsComponent } from './tests/tests.component';

import { FormsModule }    from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule
  ],
  declarations: [
    StudentComponent,
    BrowseQuestionsComponent,
    OverviewComponent,
    ReportsComponent,
    TestsComponent
  ]
})
export class StudentModule {}