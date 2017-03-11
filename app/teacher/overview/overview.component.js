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
var OverviewComponent = (function () {
    function OverviewComponent(userService, authenticationService, classOfTeacherService, classStudentService, router) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.classOfTeacherService = classOfTeacherService;
        this.classStudentService = classStudentService;
        this.router = router;
        this.users = [];
        this.addClassModel = { grade: 'K' };
        this.addStudentsModel = {};
        this.classes = [];
        this.studentsOfSelectedClass = [];
        this.selectedClassId = '';
        this.script = "<script>$('#myAddClassModal').on('shown.bs.modal', function () {\n            $('#myInputAddClass').focus()\n        });\n\n        $('#submitButtonAddClass').click(function(e) {\n            $('#myAddClassModal').modal('toggle');\n        });\n\n        $('#submitButtonAddStudent').click(function(e) {\n            $('#myAddStudentsModal').modal('toggle');\n        });\n    </script>\n\n    <script>\n        $('#myAddStudentsModal').on('show.bs.modal', function (event) {          \n          var IDVal = $('#classIDdiv').text();\n\n          var modal = $(this);\n          modal.find('#myAddStudentsModalClassID').text(\"Current ClassID: \" + IDVal);\n        });\n    </script>\n\n    ";
        console.log('Teacher Overview Component');
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    OverviewComponent.prototype.ngOnInit = function () {
        var fragment = document.createRange().createContextualFragment(this.script);
        this.elementRef.nativeElement.appendChild(fragment);
        this.loadClasses();
    };
    OverviewComponent.prototype.createClass = function () {
        var _this = this;
        console.log('createClass');
        this.classOfTeacherService.create(this.addClassModel).subscribe(function (classes) {
            _this.classes.push(classes);
        });
    };
    OverviewComponent.prototype.addStudentToClass = function () {
        var _this = this;
        this.classStudentService.create(this.addStudentsModel.studentID, this.addStudentsModel.classID).subscribe(function (students) {
            _this.loadStudents(_this.selectedClassId);
        });
    };
    OverviewComponent.prototype.loadClasses = function () {
        var _this = this;
        this.classOfTeacherService.get().subscribe(function (classes) {
            _this.classes = classes["classesOfTeacher"];
        });
    };
    OverviewComponent.prototype.loadStudentDetail = function () {
        this.router.navigate(['/teacher/student-detail']);
    };
    OverviewComponent.prototype.loadStudents = function (classID) {
        var _this = this;
        this.studentsOfSelectedClass = [];
        this.selectedClassId = classID;
        console.log(this.selectedClassId);
        var fragment = document.createRange().createContextualFragment("<div style=\"display:none\" id=\"classIDdiv\">" + this.selectedClassId + "</div>");
        this.classCodeRef.nativeElement.appendChild(fragment);
        this.classStudentService.getAll(this.selectedClassId).subscribe(function (students) {
            students["classStudents"].forEach(function (i) {
                var studentID = i.studentID;
                _this.userService.getById(studentID).subscribe(function (student) {
                    _this.studentsOfSelectedClass.push(Object.assign({}, {
                        name: student["user"].firstName + " " + student["user"].lastName,
                        id: "" + student["user"]._id
                    }));
                }, function (err) { return console.log(err); }, function () { return console.log("Completed"); });
            });
        }, function (err) { return console.log(err); }, function () { return console.log("Completed"); });
    };
    return OverviewComponent;
}());
__decorate([
    core_1.ViewChild('modalCode'),
    __metadata("design:type", core_1.ElementRef)
], OverviewComponent.prototype, "elementRef", void 0);
__decorate([
    core_1.ViewChild('classCode'),
    __metadata("design:type", core_1.ElementRef)
], OverviewComponent.prototype, "classCodeRef", void 0);
OverviewComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'overview.component.html',
        styleUrls: ['./overview.css']
    }),
    __metadata("design:paramtypes", [index_1.UserService,
        index_1.AuthenticationService,
        index_1.ClassOfTeacherService,
        index_1.ClassStudentService,
        router_1.Router])
], OverviewComponent);
exports.OverviewComponent = OverviewComponent;
//# sourceMappingURL=overview.component.js.map