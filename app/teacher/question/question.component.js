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
var router_2 = require("@angular/router");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var QuestionComponent = (function () {
    function QuestionComponent(router, route, questionService, shoppingCartService, http) {
        this.router = router;
        this.route = route;
        this.questionService = questionService;
        this.shoppingCartService = shoppingCartService;
        this.http = http;
        this.questionServerUrl = 'http://localhost:3090/';
        console.log('Question Component');
    }
    QuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.currentQuestionId = params["question_id"];
            _this.loadQuestion(_this.currentQuestionId);
        });
    };
    QuestionComponent.prototype.ngAfterViewInit = function () {
    };
    QuestionComponent.prototype.loadQuestion = function (currentQuestionId) {
        var _this = this;
        this.questionService.getById(currentQuestionId).subscribe(function (question) {
            _this.currentQuestion = question['question'];
            console.log(_this.currentQuestion);
            console.log(_this.questionServerUrl + _this.currentQuestion.questionFile);
            _this.http.get(_this.questionServerUrl + _this.currentQuestion.questionFile).map(function (response) {
                return response;
            }).subscribe(function (data) {
                _this.currentTest = data;
                var fragment = document.createRange().createContextualFragment(_this.currentTest._body);
                _this.elementRef.nativeElement.appendChild(fragment);
            }, function (err) { return console.log(err); }, function () { return console.log("Completed"); });
        });
    };
    QuestionComponent.prototype.addToTestsCart = function () {
        console.log("addToTestsCart");
        this.shoppingCartService.add(this.currentQuestion);
        console.log(this.shoppingCartService.get());
    };
    return QuestionComponent;
}());
__decorate([
    core_1.ViewChild('gameLogic'),
    __metadata("design:type", core_1.ElementRef)
], QuestionComponent.prototype, "elementRef", void 0);
QuestionComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'question.component.html',
        styleUrls: ['./question.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_2.ActivatedRoute,
        index_1.QuestionService,
        index_1.ShoppingCartService,
        http_1.Http])
], QuestionComponent);
exports.QuestionComponent = QuestionComponent;
//# sourceMappingURL=question.component.js.map