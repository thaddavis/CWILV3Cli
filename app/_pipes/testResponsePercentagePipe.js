"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TestResponsePercentagePipe = (function () {
    function TestResponsePercentagePipe() {
    }
    TestResponsePercentagePipe.prototype.transform = function (s) {
        var total = s.length;
        console.log('aahhh');
        console.log(total);
        var count = 0;
        for (var i = 0; i < s.length; ++i) {
            if (s[i] == "Correct")
                count++;
        }
        return ((count / total) * 100).toString() + "%";
    };
    return TestResponsePercentagePipe;
}());
TestResponsePercentagePipe = __decorate([
    core_1.Pipe({ name: 'testResponsePercentagePipe' })
], TestResponsePercentagePipe);
exports.TestResponsePercentagePipe = TestResponsePercentagePipe;
//# sourceMappingURL=testResponsePercentagePipe.js.map