"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var homePage_component_1 = require("./landingPages/homePage.component");
var aboutPage_component_1 = require("./landingPages/aboutPage.component");
var index_1 = require("./authPages/login/index");
var index_2 = require("./authPages/register/index");
var homeRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        children: [
            {
                path: '',
                children: [
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'home', component: homePage_component_1.HomePageComponent },
                    { path: 'about', component: aboutPage_component_1.AboutPageComponent },
                    { path: 'login', component: index_1.LoginComponent },
                    { path: 'register', component: index_2.RegisterComponent }
                ]
            }
        ]
    }
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(homeRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], HomeRoutingModule);
exports.HomeRoutingModule = HomeRoutingModule;
//# sourceMappingURL=home-routing.module.js.map