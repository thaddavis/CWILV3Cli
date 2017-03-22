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
var $ = require("jquery");
var TakeTestComponent = (function () {
    function TakeTestComponent(userService, authenticationService, router, route, classTestsForStudentsService, classStudentService, classOfTeacherService, testService, questionService, testResponseService, http) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.route = route;
        this.classTestsForStudentsService = classTestsForStudentsService;
        this.classStudentService = classStudentService;
        this.classOfTeacherService = classOfTeacherService;
        this.testService = testService;
        this.questionService = questionService;
        this.testResponseService = testResponseService;
        this.http = http;
        this.testInfo = {};
        this.currentUserID = "";
        this.currentClassID = "";
        this.responsesArray = [];
        this.questionServerUrl = 'http://localhost:3090/';
        this.questionCounter = 0;
        console.log('Take Test Component');
    }
    TakeTestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.testInfo = JSON.parse(params["testInfo"]);
            _this.currentUserID = params["studentID"];
            _this.currentClassID = params["classID"];
            _this.currentTestQuestionCount = _this.testInfo.questions.length;
            _this.loadQuestion();
        });
    };
    TakeTestComponent.prototype.ngOnDestroy = function () {
        console.log('leaving destroy all instances event listeners');
        //this.elementRef.dispose();
    };
    TakeTestComponent.prototype.nextQuestion = function () {
        console.log('eval responses Array');
        console.log(this.responsesArray);
        this.processResponse();
        if (this.questionCounter < this.currentTestQuestionCount - 1) {
            this.questionCounter++;
        }
        this.loadQuestion();
    };
    ;
    TakeTestComponent.prototype.previousQuestion = function () {
        console.log("previousQuest");
        console.log(this.currentTestQuestionCount);
        if (this.questionCounter > 0) {
            this.questionCounter--;
        }
        this.loadQuestion();
    };
    ;
    TakeTestComponent.prototype.loadQuestion = function () {
        var _this = this;
        this.questionService.getById(this.testInfo.questions[this.questionCounter]).subscribe(function (question) {
            _this.currentQuestion = question['question'];
            console.log(_this.currentQuestion);
            console.log(_this.questionServerUrl + _this.currentQuestion.questionFileGraded);
            _this.http.get(_this.questionServerUrl + _this.currentQuestion.questionFileGraded).map(function (response) {
                return response;
            }).subscribe(function (data) {
                _this.currentTest = data;
                var fragment = document.createRange().createContextualFragment(_this.currentTest._body);
                _this.elementRef.nativeElement.innerHTML = "";
                _this.elementRef.nativeElement.appendChild(fragment);
            }, function (err) { return console.log(err); }, function () { return console.log("Completed"); });
        });
    };
    TakeTestComponent.prototype.processResponse = function () {
        this.responsesArray[this.questionCounter] = $('#responseJSON')[0].innerText === "" ? "Incorrect" : $('#responseJSON')[0].innerText;
    };
    TakeTestComponent.prototype.finishedTest = function () {
        var _this = this;
        this.processResponse();
        console.log('collection of answers');
        console.log(this.responsesArray);
        console.log("studentID:" + this.currentUserID);
        console.log("classID:" + this.currentClassID);
        this.testResponseService.create({
            studentTestResponse: this.responsesArray,
            testID: this.testInfo._id,
            studentID: this.currentUserID,
            classID: this.currentClassID
        }).subscribe(function (data) {
            console.log(data);
        }, function (err) { return console.log(err); }, function () {
            console.log("Completed");
            _this.router.navigate(['/student/reports']);
        });
        // result: String,
        // testID: {
        // 	type: mongoose.Schema.Types.ObjectId,
        // required: true,
        // default: '58c40ea4152cf9154cf14cd4'
        // },
        // studentID: {
        // 	type: mongoose.Schema.Types.ObjectId,
        // required: true,
        // default: '58b37cafcb927d145f08fe5a'
        // },
        // created_at: { type : Date, default: Date.now }
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
        index_1.TestResponseService,
        http_1.Http])
], TakeTestComponent);
exports.TakeTestComponent = TakeTestComponent;
//# sourceMappingURL=take-test.component.js.map