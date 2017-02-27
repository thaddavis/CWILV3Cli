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
var StudentComponent = (function () {
    function StudentComponent(userService, authenticationService, router) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.users = [];
        console.log('Student Component');
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    StudentComponent.prototype.ngOnInit = function () {
        //this.loadAllUsers();
    };
    StudentComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/']);
    };
    StudentComponent.prototype.deleteUser = function (id) {
        //this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    };
    StudentComponent.prototype.loadAllUsers = function () {
        //this.userService.getAll().subscribe(users => { this.users = users; });
    };
    return StudentComponent;
}());
StudentComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'student.component.html',
        styleUrls: ['./student.css']
    }),
    __metadata("design:paramtypes", [index_1.UserService, index_1.AuthenticationService, router_1.Router])
], StudentComponent);
exports.StudentComponent = StudentComponent;
//# sourceMappingURL=student.component.js.map