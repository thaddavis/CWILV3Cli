import { Routes, RouterModule } from '@angular/router';

import { HomeGuard, ProfileGuard, StudentGuard, TeacherGuard } from './_guards/index';

const appRoutes: Routes = [

    {
      path: 'profile',
      loadChildren: 'app/profile/profile.module#ProfileModule',
      canActivate: [ProfileGuard]
    },

    {
      path: 'student',
      loadChildren: 'app/student/student.module#StudentModule',
      canActivate: [StudentGuard]
    },

    {
      path: 'teacher',
      loadChildren: 'app/teacher/teacher.module#TeacherModule',
      canActivate: [TeacherGuard]
    },

    { path: '',
      loadChildren: 'app/home/home.module#HomeModule',
      canActivate: [HomeGuard]
    },

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);
