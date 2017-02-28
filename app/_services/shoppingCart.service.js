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
var ShoppingCartService = (function () {
    function ShoppingCartService() {
        this.products = [];
    }
    ShoppingCartService.prototype.add = function (product) {
        this.products.push(product);
    };
    ShoppingCartService.prototype.remove = function (index) {
        if (index > -1) {
            this.products.splice(index, 1);
        }
    };
    ShoppingCartService.prototype.clear = function () {
        this.products = [];
    };
    ShoppingCartService.prototype.get = function () {
        return this.products;
    };
    return ShoppingCartService;
}());
ShoppingCartService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ShoppingCartService);
exports.ShoppingCartService = ShoppingCartService;
//# sourceMappingURL=shoppingCart.service.js.map