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
var chart_module_1 = require("../charts/chart.module");
var student_routing_module_1 = require("./student-routing.module");
var index_1 = require("../_services/index");
var index_2 = require("../_pipes/index");
var student_component_1 = require("./student.component");
var browse_questions_component_1 = require("./browse-questions/browse-questions.component");
var overview_component_1 = require("./overview/overview.component");
var reports_component_1 = require("./reports/reports.component");
var tests_component_1 = require("./tests/tests.component");
var take_test_component_1 = require("./take-test/take-test.component");
var forms_1 = require("@angular/forms");
var StudentModule = (function () {
    function StudentModule() {
    }
    return StudentModule;
}());
StudentModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            student_routing_module_1.StudentRoutingModule,
            forms_1.FormsModule,
            chart_module_1.ChartModule
        ],
        declarations: [
            student_component_1.StudentComponent,
            browse_questions_component_1.BrowseQuestionsComponent,
            overview_component_1.OverviewComponent,
            reports_component_1.ReportsComponent,
            tests_component_1.TestsComponent,
            take_test_component_1.TakeTestComponent,
            index_2.SanitizeHtmlPipe,
            index_2.TestResponsePercentagePipe
        ],
        providers: [
            index_1.ClassTestsForStudentsService,
            index_1.ClassStudentService,
            index_1.ClassOfTeacherService,
            index_1.TestService,
            index_1.QuestionService,
            index_1.TestResponseService
        ]
    })
], StudentModule);
exports.StudentModule = StudentModule;
//# sourceMappingURL=student.module.js.map