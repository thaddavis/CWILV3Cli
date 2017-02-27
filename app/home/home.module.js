"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var home_routing_module_1 = require("./home-routing.module");
var home_component_1 = require("./home.component");
var homePage_component_1 = require("./landingPages/homePage.component");
var aboutPage_component_1 = require("./landingPages/aboutPage.component");
var login_component_1 = require("./authPages/login/login.component");
var register_component_1 = require("./authPages/register/register.component");
var forms_1 = require("@angular/forms");
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            home_routing_module_1.HomeRoutingModule,
            forms_1.FormsModule
        ],
        declarations: [
            home_component_1.HomeComponent,
            homePage_component_1.HomePageComponent,
            aboutPage_component_1.AboutPageComponent,
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent
        ]
    })
], HomeModule);
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map