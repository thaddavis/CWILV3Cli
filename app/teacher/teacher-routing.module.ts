import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeacherComponent } from './teacher.component';
import { BrowseQuestionsComponent } from './browse-questions/browse-questions.component';
import { OverviewComponent } from './overview/overview.component';
import { ReportsComponent } from './reports/reports.component';
import { TestsComponent } from './tests/tests.component';
import { QuestionComponent } from './question/question.component';

import { TeacherGuard } from '../_guards/index';

const teacherRoutes: Routes = [
  {
    path: '',
    component: TeacherComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', redirectTo: 'overview', pathMatch: 'full' },
          { path: 'overview', component: OverviewComponent },
          { path: 'tests', component: TestsComponent },
          { path: 'reports', component: ReportsComponent },
          { path: 'browse-questions', component: BrowseQuestionsComponent },
          { path: 'question', component: QuestionComponent }
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
