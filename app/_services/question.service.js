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
var http_1 = require("@angular/http");
var QuestionService = (function () {
    function QuestionService(http) {
        this.http = http;
        this.questionServerUrl = 'http://localhost:3090';
    }
    QuestionService.prototype.getAll = function () {
        return this.http.get(this.questionServerUrl + '/questions', this.jwt()).map(function (response) {
            return response.json();
        });
    };
    QuestionService.prototype.getById = function (id) {
        return this.http.get(this.questionServerUrl + '/questions/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    QuestionService.prototype.create = function (question) {
        return this.http.post(this.questionServerUrl + '/questions', question, this.jwt()).map(function (response) { return response.json(); });
    };
    QuestionService.prototype.update = function (question) {
        return this.http.put(this.questionServerUrl + '/questions/' + question.id, question, this.jwt()).map(function (response) { return response.json(); });
    };
    QuestionService.prototype.delete = function (id) {
        return this.http.delete(this.questionServerUrl + '/questions/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    QuestionService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({ 'Authorization': currentUser.token });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    return QuestionService;
}());
QuestionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], QuestionService);
exports.QuestionService = QuestionService;
//# sourceMappingURL=question.service.js.map