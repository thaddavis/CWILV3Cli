import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentComponent } from './student.component';
import { BrowseQuestionsComponent } from './browse-questions/browse-questions.component';
import { OverviewComponent } from './overview/overview.component';
import { ReportsComponent } from './reports/reports.component';
import { TestsComponent } from './tests/tests.component';

import { StudentGuard } from '../_guards/index';

const studentRoutes: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', redirectTo: 'overview', pathMatch: 'full' },
          { path: 'overview', component: OverviewComponent },
          { path: 'tests', component: TestsComponent },
          { path: 'reports', component: ReportsComponent },
          { path: 'browse-questions', component: BrowseQuestionsComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(studentRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StudentRoutingModule {}
