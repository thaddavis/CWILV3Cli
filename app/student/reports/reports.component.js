"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../../_services/index");
var router_1 = require("@angular/router");
var ReportsComponent = (function () {
    function ReportsComponent(userService, authenticationService, router, classStudentService, classOfTeacherService, testService, testResponseService) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.classStudentService = classStudentService;
        this.classOfTeacherService = classOfTeacherService;
        this.testService = testService;
        this.testResponseService = testResponseService;
        this.users = [];
        this.currentUserID = '';
        this.studentClasses = [];
        this.testsOfSelectedClass = [];
        this.testsResponsesOfSelectedClass = [];
        console.log('Reports Component');
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ReportsComponent.prototype.ngOnInit = function () {
        this.loadMyClasses();
    };
    ReportsComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/']);
    };
    ReportsComponent.prototype.deleteUser = function (id) {
        //this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    };
    ReportsComponent.prototype.loadMyClasses = function () {
        var _this = this;
        this.authenticationService.authenticated(JSON.parse(localStorage.getItem('currentUser'))).subscribe(function (data) {
            _this.currentUserID = data.userID;
            _this.classStudentService.getStudentClasses(_this.currentUserID).subscribe(function (data) {
                var classIDs = [];
                for (var _i = 0, _a = data["studentClasses"]; _i < _a.length; _i++) {
                    var i = _a[_i];
                    if (classIDs.indexOf(i.classID) == -1) {
                        classIDs.push(i.classID);
                    }
                }
                for (var _b = 0, classIDs_1 = classIDs; _b < classIDs_1.length; _b++) {
                    var i = classIDs_1[_b];
                    _this.classOfTeacherService.getById(i).subscribe(function (data) {
                        _this.studentClasses.push(data["classOfTeacher"]);
                    });
                }
            });
        });
    };
    ReportsComponent.prototype.loadGrades = function (classID) {
        var _this = this;
        this.testsResponsesOfSelectedClass = [];
        this.testResponseService.getTestResponsesForStudentInClass(this.currentUserID, classID).subscribe(function (data) {
            console.log("*********");
            console.log(data);
            _this.testsResponsesOfSelectedClass = data["studentResponses"];
            // var testIDs = [];
            //
            // for (let i of data["tests"]) {
            //
            //     if( testIDs.indexOf(i.testID) == -1 ) {
            //         testIDs.push(i.testID);
            //     }
            // }
            //
            // for (let i of testIDs) {
            //
            //     this.testService.getTestsById(i).subscribe(
            //         data => {
            //             this.testsOfSelectedClass.push(data["test"]);
            //             console.log(this.testsOfSelectedClass);
            //         }
            //     )
            //
            // }
        });
    };
    return ReportsComponent;
}());
ReportsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'reports.component.html',
        styleUrls: ['./reports.css']
    }),
    __metadata("design:paramtypes", [index_1.UserService,
        index_1.AuthenticationService,
        router_1.Router,
        index_1.ClassStudentService,
        index_1.ClassOfTeacherService,
        index_1.TestService,
        index_1.TestResponseService])
], ReportsComponent);
exports.ReportsComponent = ReportsComponent;
//# sourceMappingURL=reports.component.js.map