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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var TakeTestComponent = (function () {
    function TakeTestComponent(userService, authenticationService, router, route, classTestsForStudentsService, classStudentService, classOfTeacherService, testService, questionService, http) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.route = route;
        this.classTestsForStudentsService = classTestsForStudentsService;
        this.classStudentService = classStudentService;
        this.classOfTeacherService = classOfTeacherService;
        this.testService = testService;
        this.questionService = questionService;
        this.http = http;
        this.testInfo = {};
        this.questionServerUrl = 'http://localhost:3090/';
        console.log('Take Test Component');
    }
    TakeTestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.testInfo = JSON.parse(params["testInfo"]);
            _this.beginTest();
        });
    };
    TakeTestComponent.prototype.ngOnDestroy = function () {
        console.log('leaving destroy all instances event listeners');
        //this.elementRef.dispose();
    };
    TakeTestComponent.prototype.beginTest = function () {
        var _this = this;
        console.log('beginning Test');
        console.log(this.testInfo);
        for (var _i = 0, _a = this.testInfo.questions; _i < _a.length; _i++) {
            var i = _a[_i];
            this.questionService.getById(i).subscribe(function (question) {
                _this.currentQuestion = question['question'];
                console.log(_this.currentQuestion);
                console.log(_this.questionServerUrl + _this.currentQuestion.questionFileGraded);
                _this.http.get(_this.questionServerUrl + _this.currentQuestion.questionFileGraded).map(function (response) {
                    return response;
                }).subscribe(function (data) {
                    _this.currentTest = data;
                    console.log('ComeOn');
                    console.log(_this.elementRef.nativeElement.children);
                    //this.elementRef.nativeElement.children.remove();
                    console.log(_this.elementRef.nativeElement.children);
                    console.log('Negro');
                    console.log(_this.elementRef.nativeElement.children);
                    //this.elementRef.nativeElement.removeChild(this.elementRef.nativeElement.firstChild);
                    console.log('Negro 2');
                    //this.elementRef.nativeElement.replaceChild('', this.elementRef.nativeElement.firstChild);    
                    var fragment = document.createRange().createContextualFragment(_this.currentTest._body);
                    _this.elementRef.nativeElement.appendChild(fragment);
                    //this.elementRef.nativeElement.replaceChild(fragment, this.elementRef);    
                }, function (err) { return console.log(err); }, function () { return console.log("Completed"); });
            });
        }
    };
    return TakeTestComponent;
}());
__decorate([
    core_1.ViewChild('currentQuestionCode'),
    __metadata("design:type", core_1.ElementRef)
], TakeTestComponent.prototype, "elementRef", void 0);
TakeTestComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'take-test.component.html',
        styleUrls: ['./take-test.css']
    }),
    __metadata("design:paramtypes", [index_1.UserService,
        index_1.AuthenticationService,
        router_1.Router,
        router_1.ActivatedRoute,
        index_1.ClassTestsForStudentsService,
        index_1.ClassStudentService,
        index_1.ClassOfTeacherService,
        index_1.TestService,
        index_1.QuestionService,
        http_1.Http])
], TakeTestComponent);
exports.TakeTestComponent = TakeTestComponent;
//# sourceMappingURL=take-test.component.js.map