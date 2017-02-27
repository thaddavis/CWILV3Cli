import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileGuard } from '../_guards/index';
import { HomeComponent } from './home.component';
import { HomePageComponent } from './landingPages/homePage.component';
import { AboutPageComponent } from './landingPages/aboutPage.component';

import { LoginComponent } from './authPages/login/index';
import { RegisterComponent } from './authPages/register/index';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', redirectTo: 'home', pathMatch: 'full' },
          { path: 'home', component: HomePageComponent },
          { path: 'about', component: AboutPageComponent },
          { path: 'login', component: LoginComponent },
          { path: 'register', component: RegisterComponent }

        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {}
