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
var teacher_component_1 = require("./teacher.component");
var browse_questions_component_1 = require("./browse-questions/browse-questions.component");
var overview_component_1 = require("./overview/overview.component");
var reports_component_1 = require("./reports/reports.component");
var tests_component_1 = require("./tests/tests.component");
var teacherRoutes = [
    {
        path: '',
        component: teacher_component_1.TeacherComponent,
        children: [
            {
                path: '',
                children: [
                    { path: '', redirectTo: 'overview', pathMatch: 'full' },
                    { path: 'overview', component: overview_component_1.OverviewComponent },
                    { path: 'tests', component: tests_component_1.TestsComponent },
                    { path: 'reports', component: reports_component_1.ReportsComponent },
                    { path: 'browse-questions', component: browse_questions_component_1.BrowseQuestionsComponent }
                ]
            }
        ]
    }
];
var TeacherRoutingModule = (function () {
    function TeacherRoutingModule() {
    }
    return TeacherRoutingModule;
}());
TeacherRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(teacherRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], TeacherRoutingModule);
exports.TeacherRoutingModule = TeacherRoutingModule;
//# sourceMappingURL=teacher-routing.module.js.map