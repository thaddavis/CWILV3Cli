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
var GradeDetailComponent = (function () {
    function GradeDetailComponent(userService, authenticationService, testService, questionService, route, router) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.testService = testService;
        this.questionService = questionService;
        this.route = route;
        this.router = router;
        this.users = [];
        this.questionInfo = [];
        console.log('GradeDetailComponent');
        //this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    GradeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            console.log(params['testID']);
            console.log(params['result']);
            _this.testID = params['testID'];
            _this.result = params['result'].split(',');
            _this.loadGradeDetailInfo();
        });
    };
    GradeDetailComponent.prototype.loadGradeDetailInfo = function () {
        var _this = this;
        this.testService.getTestsById(this.testID).subscribe(function (test) {
            console.log(test['test']);
            for (var _i = 0, _a = test['test'].questions; _i < _a.length; _i++) {
                var i = _a[_i];
                _this.questionService.getById(i).subscribe(function (q) {
                    console.log(q['question']);
                    _this.questionInfo.push(q['question']);
                });
            }
            // this.http.get(this.questionServerUrl + this.currentQuestion.questionFile).map((response: Response) =>
            //   response).subscribe(
            //                   data => {
            //                     this.currentTest = data;
            //
            //                     const fragment = document.createRange().createContextualFragment(this.currentTest._body);
            //                     this.elementRef.nativeElement.appendChild(fragment);
            //                   },
            //                   err => console.log(err),
            //                   () => console.log("Completed"));
        }, function (err) { return console.log(err); }, function () { return console.log("Completed"); });
    };
    return GradeDetailComponent;
}());
GradeDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'grade-detail.component.html',
        styleUrls: ['./grade-detail.css']
    }),
    __metadata("design:paramtypes", [index_1.UserService,
        index_1.AuthenticationService,
        index_1.TestService,
        index_1.QuestionService,
        router_1.ActivatedRoute,
        router_1.Router])
], GradeDetailComponent);
exports.GradeDetailComponent = GradeDetailComponent;
//# sourceMappingURL=grade-detail.component.js.map