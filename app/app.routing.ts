import { Routes, RouterModule } from '@angular/router';

import { AuthGuard, HomeGuard, ProfileGuard } from './_guards/index';

const appRoutes: Routes = [

    { path: 'profile',
      loadChildren: 'app/profile/profile.module#ProfileModule',
      canActivate: [ProfileGuard] },

    { path: '',
      loadChildren: 'app/home/home.module#HomeModule',
      canActivate: [HomeGuard]
    },

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);
