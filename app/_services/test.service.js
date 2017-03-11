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
var TestService = (function () {
    function TestService(http) {
        this.http = http;
        this.testServerUrl = 'http://localhost:3090';
    }
    TestService.prototype.getTests = function () {
        return this.http.get(this.testServerUrl + '/tests', this.jwt()).map(function (response) {
            return response.json();
        });
    };
    TestService.prototype.getTestsById = function (testID) {
        return this.http.get(this.testServerUrl + '/tests/' + testID, this.jwt()).map(function (response) {
            return response.json();
        });
    };
    TestService.prototype.getTestsForClass = function (classID) {
        console.log('getTestsForClass');
        return this.http.get(this.testServerUrl + '/testsForClass/' + classID, this.jwt()).map(function (response) {
            return response.json();
        });
    };
    TestService.prototype.create = function (t) {
        var questions = [];
        t.forEach(function (item, index) {
            questions.push(item._id);
        });
        var tObj = { name: 'Augustin Test', questions: questions };
        return this.http.post(this.testServerUrl + '/tests', tObj, this.jwt()).map(function (response) { return response.json(); });
    };
    TestService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({ 'Authorization': currentUser.token });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    return TestService;
}());
TestService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TestService);
exports.TestService = TestService;
//# sourceMappingURL=test.service.js.map