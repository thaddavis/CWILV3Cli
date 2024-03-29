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
var HomeGuard = (function () {
    function HomeGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    HomeGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        var token = JSON.parse(localStorage.getItem('currentUser'));
        if (token) {
            var response = this.authenticationService.authenticated(token)
                .subscribe(function (data) {
                _this.router.navigate(['/profile']);
                return true;
            }, function (error) {
                return true;
            });
        }
        else {
            return true;
        }
    };
    HomeGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    return HomeGuard;
}());
HomeGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, index_1.AuthenticationService])
], HomeGuard);
exports.HomeGuard = HomeGuard;
//# sourceMappingURL=home.guard.js.map