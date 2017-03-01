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
var router_2 = require("@angular/router");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var StudentDetailComponent = (function () {
    function StudentDetailComponent(router, route, questionService, shoppingCartService, http) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.questionService = questionService;
        this.shoppingCartService = shoppingCartService;
        this.http = http;
        console.log('Student Detail Component');
        http.get('https://cdn.rawgit.com/gevgeny/angular2-highcharts/99c6324d/examples/aapl.json').subscribe(function (res) {
            _this.options = {
                title: { text: 'AAPL Stock Price' },
                series: [{
                        name: 'AAPL',
                        data: res.json(),
                        tooltip: {
                            valueDecimals: 2
                        }
                    }]
            };
        });
    }
    StudentDetailComponent.prototype.ngOnInit = function () {
    };
    return StudentDetailComponent;
}());
StudentDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'student-detail.component.html',
        styleUrls: ['./student-detail.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_2.ActivatedRoute,
        index_1.QuestionService,
        index_1.ShoppingCartService,
        http_1.Http])
], StudentDetailComponent);
exports.StudentDetailComponent = StudentDetailComponent;
//# sourceMappingURL=student-detail.component.js.map