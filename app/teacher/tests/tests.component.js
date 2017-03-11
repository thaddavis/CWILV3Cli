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
var TestsComponent = (function () {
    function TestsComponent(userService, authenticationService, router, shoppingCartService, testService, classOfTeacherService, classTestService) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.router = router;
        this.shoppingCartService = shoppingCartService;
        this.testService = testService;
        this.classOfTeacherService = classOfTeacherService;
        this.classTestService = classTestService;
        this.shoppingCart = [];
        this.tests = [];
        this.classes = [];
        this.assignTestToClassModel = {};
        this.script = "<script>$('#exampleModal').on('show.bs.modal', function (event) {\n\n      var button = $(event.relatedTarget); \n      var testid = button.data('testid');\n      var testname = button.data('name'); \n\n      var modal = $(this);\n      modal.find('#myAssignTestName').text(\"Assign \" + testname);\n      modal.find('#hiddentestID').val(testid);\n\n    });\n\n      $('#submitButtonAssignTest').click(function(e) {\n            $('#exampleModal').modal('toggle');\n      });\n\n    </script>";
        console.log('Test Component');
    }
    TestsComponent.prototype.ngOnInit = function () {
        this.loadTestsCart();
        this.loadAllTests();
        this.loadAllClasses();
        var fragment = document.createRange().createContextualFragment(this.script);
        this.elementRef.nativeElement.appendChild(fragment);
    };
    TestsComponent.prototype.buildTest = function () {
        var _this = this;
        this.testService.create(this.shoppingCartService.get()).subscribe(function (test) {
            _this.shoppingCartService.clear();
            _this.loadTestsCart();
            _this.loadAllTests();
        });
    };
    TestsComponent.prototype.loadTestsCart = function () {
        this.shoppingCart = this.shoppingCartService.get();
    };
    TestsComponent.prototype.loadAllTests = function () {
        var _this = this;
        this.testService.getTests().subscribe(function (tests) {
            console.log(tests);
            _this.tests = tests['tests'];
        });
    };
    TestsComponent.prototype.loadAllClasses = function () {
        var _this = this;
        this.classOfTeacherService.get().subscribe(function (classes) {
            _this.classes = classes["classesOfTeacher"];
            console.log(_this.classes);
        });
    };
    TestsComponent.prototype.assignTest = function () {
        this.assignTestToClassModel.testid = this.testidRef.nativeElement.value;
        this.classTestService.create(this.assignTestToClassModel).subscribe(function (classTest) {
            console.log(classTest);
        });
    };
    return TestsComponent;
}());
__decorate([
    core_1.ViewChild('modalCode'),
    __metadata("design:type", core_1.ElementRef)
], TestsComponent.prototype, "elementRef", void 0);
__decorate([
    core_1.ViewChild('hiddentestID'),
    __metadata("design:type", core_1.ElementRef)
], TestsComponent.prototype, "testidRef", void 0);
TestsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'tests.component.html',
        styleUrls: ['./tests.css']
    }),
    __metadata("design:paramtypes", [index_1.UserService,
        index_1.AuthenticationService,
        router_1.Router,
        index_1.ShoppingCartService,
        index_1.TestService,
        index_1.ClassOfTeacherService,
        index_1.ClassTestService])
], TestsComponent);
exports.TestsComponent = TestsComponent;
//# sourceMappingURL=tests.component.js.map