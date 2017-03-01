import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { ChartModule } from '../charts/chart.module';

import { TeacherRoutingModule }       from './teacher-routing.module';

import { QuestionService, GradeStandardService } from '../_services/index';

import { TodoService } from './todo-list/todo-list.service';

import { TeacherComponent } from './teacher.component';
import { BrowseQuestionsComponent } from './browse-questions/browse-questions.component';
import { OverviewComponent } from './overview/overview.component';
import { ReportsComponent } from './reports/reports.component';
import { TestsComponent } from './tests/tests.component';
import { QuestionComponent } from './question/question.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

import { StandardCleanerPipe } from '../_pipes/index';

import { TodoListComponent } from './todo-list/index';
import { TodoComponent, Todo } from './todo/index';
import { MakeDraggable, MakeDroppable } from './shared/index';

@NgModule({
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule,
    ChartModule
  ],
  declarations: [
    TeacherComponent,
    BrowseQuestionsComponent,
    OverviewComponent,
    ReportsComponent,
    TestsComponent,
    QuestionComponent,
    TodoListComponent,
    StudentDetailComponent,
    StandardCleanerPipe,
    TodoComponent,
    MakeDraggable,
    MakeDroppable
  ],
  providers: [
    TodoService,
    QuestionService,
    GradeStandardService
  ]
})
export class TeacherModule {}
