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
var TestsComponent = (function () {
    function TestsComponent(userService, authenticationService, router, classTestsForStudentsService, classStudentService, classOfTeacherService, testService) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.classTestsForStudentsService = classTestsForStudentsService;
        this.classStudentService = classStudentService;
        this.classOfTeacherService = classOfTeacherService;
        this.testService = testService;
        this.studentClasses = [];
        this.testsOfSelectedClass = [];
        console.log('Tests Component');
        this.loadMyClasses();
    }
    TestsComponent.prototype.loadMyClasses = function () {
        var _this = this;
        var studentID = '';
        this.authenticationService.authenticated(JSON.parse(localStorage.getItem('currentUser'))).subscribe(function (data) {
            studentID = data.userID;
            _this.classStudentService.getStudentClasses(studentID).subscribe(function (data) {
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
    TestsComponent.prototype.loadTests = function (classID) {
        var _this = this;
        this.testsOfSelectedClass = [];
        this.testService.getTestsForClass(classID).subscribe(function (data) {
            var testIDs = [];
            for (var _i = 0, _a = data["tests"]; _i < _a.length; _i++) {
                var i = _a[_i];
                if (testIDs.indexOf(i.testID) == -1) {
                    testIDs.push(i.testID);
                }
            }
            for (var _b = 0, testIDs_1 = testIDs; _b < testIDs_1.length; _b++) {
                var i = testIDs_1[_b];
                _this.testService.getTestsById(i).subscribe(function (data) {
                    _this.testsOfSelectedClass.push(data["test"]);
                    console.log(_this.testsOfSelectedClass);
                });
            }
        });
    };
    TestsComponent.prototype.takeTest = function (t) {
        var navigationExtras = {
            queryParams: {
                "testInfo": JSON.stringify(t)
            }
        };
        this.router.navigate(['/student/take-test'], navigationExtras);
    };
    return TestsComponent;
}());
TestsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'tests.component.html',
        styleUrls: ['./tests.css']
    }),
    __metadata("design:paramtypes", [index_1.UserService,
        index_1.AuthenticationService,
        router_1.Router,
        index_1.ClassTestsForStudentsService,
        index_1.ClassStudentService,
        index_1.ClassOfTeacherService,
        index_1.TestService])
], TestsComponent);
exports.TestsComponent = TestsComponent;
//# sourceMappingURL=tests.component.js.map