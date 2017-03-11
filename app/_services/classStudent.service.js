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
var ClassStudentService = (function () {
    function ClassStudentService(http) {
        this.http = http;
        this.classStudentServerUrl = 'http://localhost:3090';
    }
    ClassStudentService.prototype.getAll = function (classID) {
        var classIDObj = { classID: classID };
        console.log(classIDObj);
        return this.http.post(this.classStudentServerUrl + '/students', classIDObj, this.jwt()).map(function (response) {
            return response.json();
        });
    };
    ClassStudentService.prototype.create = function (studentID, classID) {
        var classObj = { studentID: studentID, classID: classID };
        console.log("create");
        console.log(classObj);
        return this.http.post(this.classStudentServerUrl + '/newStudents', classObj, this.jwt()).map(function (response) { return response.json(); });
    };
    ClassStudentService.prototype.getStudentClasses = function (studentID) {
        console.log('getting student classes');
        console.log(studentID);
        var studentIDObj = { studentID: studentID };
        return this.http.post(this.classStudentServerUrl + '/studentClasses', studentIDObj, this.jwt()).map(function (response) { return response.json(); });
    };
    ClassStudentService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({ 'Authorization': currentUser.token });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    return ClassStudentService;
}());
ClassStudentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ClassStudentService);
exports.ClassStudentService = ClassStudentService;
//# sourceMappingURL=classStudent.service.js.map