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
var ProfileGuard = (function () {
    function ProfileGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    ProfileGuard.prototype.canActivate = function (route, state) {
        return true;
    };
    ProfileGuard.prototype.canActivateChild = function (route, state) {
        return true;
    };
    return ProfileGuard;
}());
ProfileGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, index_1.AuthenticationService])
], ProfileGuard);
exports.ProfileGuard = ProfileGuard;
/*let token = JSON.parse(localStorage.getItem('currentUser'))
if (token) {
  console.log('token');
  this.authenticationService.authenticateRole(token)
    .subscribe(
      data => {
          console.log('authenticate Role');
          if (data.role == "student") {
            console.log('student Role');
            this.router.navigate(['/profile/student']);
            return true;
          } else if (data.role == "teacher") {
            console.log('teacher Role');
            this.router.navigate(['/profile/teacher']);
            return true;
          } else {
            console.log('false');
            return false;
          }
      },
      error => {
          console.log('false');
          return false;
      });
} else {
  console.log('false');
  return false;
}*/
//# sourceMappingURL=profile.guard.js.map