"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var student_component_1 = require("./student.component");
var browse_questions_component_1 = require("./browse-questions/browse-questions.component");
var overview_component_1 = require("./overview/overview.component");
var reports_component_1 = require("./reports/reports.component");
var tests_component_1 = require("./tests/tests.component");
var grade_detail_component_1 = require("./grade-detail/grade-detail.component");
var take_test_component_1 = require("./take-test/take-test.component");
var studentRoutes = [
    {
        path: '',
        component: student_component_1.StudentComponent,
        children: [
            {
                path: '',
                children: [
                    { path: '', redirectTo: 'overview', pathMatch: 'full' },
                    { path: 'overview', component: overview_component_1.OverviewComponent },
                    { path: 'tests', component: tests_component_1.TestsComponent },
                    { path: 'reports', component: reports_component_1.ReportsComponent },
                    { path: 'browse-questions', component: browse_questions_component_1.BrowseQuestionsComponent },
                    { path: 'take-test', component: take_test_component_1.TakeTestComponent },
                    { path: 'grade-detail', component: grade_detail_component_1.GradeDetailComponent }
                ]
            }
        ]
    }
];
var StudentRoutingModule = (function () {
    function StudentRoutingModule() {
    }
    return StudentRoutingModule;
}());
StudentRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(studentRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], StudentRoutingModule);
exports.StudentRoutingModule = StudentRoutingModule;
//# sourceMappingURL=student-routing.module.js.map