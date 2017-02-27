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
var profile_component_1 = require("./profile.component");
var teacher_component_1 = require("./roles/teacher.component");
var student_component_1 = require("./roles/student.component");
var index_1 = require("../_guards/index");
var profileRoutes = [
    {
        path: '',
        component: profile_component_1.ProfileComponent,
        canActivate: [index_1.AuthGuard],
        children: [
            {
                path: '',
                canActivateChild: [index_1.ProfileGuard],
                children: [
                    { path: '', pathMatch: 'full' },
                    { path: 'teacher', component: teacher_component_1.TeacherComponent },
                    { path: 'student', component: student_component_1.StudentComponent }
                ]
            }
        ]
    }
];
var ProfileRoutingModule = (function () {
    function ProfileRoutingModule() {
    }
    return ProfileRoutingModule;
}());
ProfileRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(profileRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], ProfileRoutingModule);
exports.ProfileRoutingModule = ProfileRoutingModule;
//# sourceMappingURL=profile-routing.module.js.map