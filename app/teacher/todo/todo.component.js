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
var TodoComponent = (function () {
    function TodoComponent() {
    }
    TodoComponent.prototype.ngOnInit = function () { };
    return TodoComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TodoComponent.prototype, "todo", void 0);
TodoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'todo',
        templateUrl: 'todo.component.html',
        styleUrls: ['todo.component.css']
    }),
    __metadata("design:paramtypes", [])
], TodoComponent);
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=todo.component.js.map