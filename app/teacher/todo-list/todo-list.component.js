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
var todo_list_service_1 = require("./todo-list.service");
var TodoListComponent = (function () {
    function TodoListComponent(_todoSvc) {
        this._todoSvc = _todoSvc;
    }
    TodoListComponent.prototype.ngOnInit = function () {
        this.todos = this._todoSvc.getTodos();
    };
    TodoListComponent.prototype.onDrop = function (src, trg) {
        this._moveRow(src.order, trg.order);
    };
    TodoListComponent.prototype._moveRow = function (src, trg) {
        src = parseInt(src);
        trg = parseInt(trg);
        // If the element was moved down
        if (src > trg) {
            for (var i = trg; i < src; i++) {
                this.todos[i].order++;
            }
        }
        else {
            for (var i = src + 1; i <= trg; i++) {
                this.todos[i].order--;
            }
        }
        this.todos[src].order = trg;
        this.todos.sort(function (a, b) { return a.order - b.order; });
    };
    return TodoListComponent;
}());
TodoListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'todo-list',
        templateUrl: 'todo-list.component.html',
        styleUrls: ['todo-list.component.css']
    }),
    __metadata("design:paramtypes", [todo_list_service_1.TodoService])
], TodoListComponent);
exports.TodoListComponent = TodoListComponent;
//# sourceMappingURL=todo-list.component.js.map