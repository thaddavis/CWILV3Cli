import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { HomeGuard, ProfileGuard, TeacherGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent
    ],
    providers: [
        HomeGuard,
        ProfileGuard,
        TeacherGuard,
        AlertService,
        AuthenticationService,
        UserService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
