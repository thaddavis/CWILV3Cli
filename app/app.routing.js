"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./_guards/index");
var appRoutes = [
    {
        path: 'profile',
        loadChildren: 'app/profile/profile.module#ProfileModule',
        canActivate: [index_1.ProfileGuard]
    },
    {
        path: 'student',
        loadChildren: 'app/student/student.module#StudentModule',
        canActivate: [index_1.StudentGuard]
    },
    {
        path: 'teacher',
        loadChildren: 'app/teacher/teacher.module#TeacherModule',
        canActivate: [index_1.TeacherGuard]
    },
    { path: '',
        loadChildren: 'app/home/home.module#HomeModule',
        canActivate: [index_1.HomeGuard]
    },
    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map