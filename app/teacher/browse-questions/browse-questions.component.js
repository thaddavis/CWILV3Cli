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
var BrowseQuestionsComponent = (function () {
    function BrowseQuestionsComponent(userService, authenticationService, router, questionService, gradeStandardService) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.questionService = questionService;
        this.gradeStandardService = gradeStandardService;
        this.questions = [];
        this.filteredQuestions = [];
    }
    BrowseQuestionsComponent.prototype.ngOnInit = function () {
        this.loadAllQuestions();
        this.loadAllDomainsAndStandards();
    };
    BrowseQuestionsComponent.prototype.loadAllQuestions = function () {
        var _this = this;
        this.questionService.getAll().subscribe(function (questions) {
            console.log(questions['questions']);
            _this.questions = questions['questions'];
            _this.filteredQuestions = _this.questions;
        });
    };
    BrowseQuestionsComponent.prototype.loadAllDomainsAndStandards = function () {
        var _this = this;
        this.gradeStandardService.getAll().subscribe(function (data) {
            _this.domainKeys = Object.keys(data['gradeStandards'][0]['domains']);
            _this.domainsAndStandards = data['gradeStandards'][0]['domains'];
        });
    };
    BrowseQuestionsComponent.prototype.filterQuestions = function (standard) {
        if (standard.length == 0) {
            this.filteredQuestions = this.questions;
            return;
        }
        var queryStandard = standard;
        this.filteredQuestions = this.questions.filter(function (q) { return q.standard === queryStandard; });
        console.log(this.filteredQuestions);
    };
    BrowseQuestionsComponent.prototype.loadQuestionDetail = function () {
        var navigationExtras = {
            queryParams: {
                "firstname": "Nic",
                "lastname": "Raboy"
            }
        };
        this.router.navigate(['/teacher/question'], navigationExtras);
    };
    return BrowseQuestionsComponent;
}());
BrowseQuestionsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'browse-questions.component.html',
        styleUrls: ['./browse-questions.css']
    }),
    __metadata("design:paramtypes", [index_1.UserService,
        index_1.AuthenticationService,
        router_1.Router,
        index_1.QuestionService,
        index_1.GradeStandardService])
], BrowseQuestionsComponent);
exports.BrowseQuestionsComponent = BrowseQuestionsComponent;
//# sourceMappingURL=browse-questions.component.js.map