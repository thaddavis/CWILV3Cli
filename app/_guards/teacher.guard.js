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
var router_1 = require("@angular/router");
var index_1 = require("../_services/index");
require("rxjs/add/operator/map");
require("rxjs/add/operator/first");
var Observable_1 = require("rxjs/Observable");
var TeacherGuard = (function () {
    function TeacherGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    TeacherGuard.prototype.canActivate = function (route, state) {
        var token = JSON.parse(localStorage.getItem('currentUser'));
        if (token) {
            return this.authenticationService.authenticateRole(token)
                .map(function (data) {
                if (data.role == "student") {
                    return false;
                }
                else if (data.role == "teacher") {
                    return true;
                }
                else {
                    return false;
                }
            });
        }
        else {
            this.router.navigate(['/login']);
            return Observable_1.Observable.of(false);
            //return false;
        }
    };
    return TeacherGuard;
}());
TeacherGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, index_1.AuthenticationService])
], TeacherGuard);
exports.TeacherGuard = TeacherGuard;
//# sourceMappingURL=teacher.guard.js.map