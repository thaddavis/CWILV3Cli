import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { HomeRoutingModule }       from './home-routing.module';

import { HomeComponent } from './home.component';
import { HomePageComponent } from './landingPages/homePage.component';
import { AboutPageComponent } from './landingPages/aboutPage.component';
import { LoginComponent } from './authPages/login/login.component';
import { RegisterComponent } from './authPages/register/register.component';

import { FormsModule }    from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    HomePageComponent,
    AboutPageComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class HomeModule {}
