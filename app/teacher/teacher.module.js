"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var chart_module_1 = require("../charts/chart.module");
var teacher_routing_module_1 = require("./teacher-routing.module");
var index_1 = require("../_services/index");
var todo_list_service_1 = require("./todo-list/todo-list.service");
var teacher_component_1 = require("./teacher.component");
var browse_questions_component_1 = require("./browse-questions/browse-questions.component");
var overview_component_1 = require("./overview/overview.component");
var reports_component_1 = require("./reports/reports.component");
var tests_component_1 = require("./tests/tests.component");
var question_component_1 = require("./question/question.component");
var student_detail_component_1 = require("./student-detail/student-detail.component");
var index_2 = require("../_pipes/index");
var index_3 = require("./todo-list/index");
var index_4 = require("./todo/index");
var index_5 = require("./shared/index");
var TeacherModule = (function () {
    function TeacherModule() {
    }
    return TeacherModule;
}());
TeacherModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            teacher_routing_module_1.TeacherRoutingModule,
            forms_1.FormsModule,
            chart_module_1.ChartModule
        ],
        declarations: [
            teacher_component_1.TeacherComponent,
            browse_questions_component_1.BrowseQuestionsComponent,
            overview_component_1.OverviewComponent,
            reports_component_1.ReportsComponent,
            tests_component_1.TestsComponent,
            question_component_1.QuestionComponent,
            index_3.TodoListComponent,
            student_detail_component_1.StudentDetailComponent,
            index_2.StandardCleanerPipe,
            index_4.TodoComponent,
            index_5.MakeDraggable,
            index_5.MakeDroppable
        ],
        providers: [
            todo_list_service_1.TodoService,
            index_1.QuestionService,
            index_1.GradeStandardService,
            index_1.TestService,
            index_1.ClassOfTeacherService,
            index_1.ClassStudentService,
            index_1.ClassTestService
        ]
    })
], TeacherModule);
exports.TeacherModule = TeacherModule;
//# sourceMappingURL=teacher.module.js.map