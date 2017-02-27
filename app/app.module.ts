import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// used to create fake backend
// import { fakeBackendProvider } from './_helpers/index';
// import { MockBackend, MockConnection } from '@angular/http/testing';
// import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard, HomeGuard, ProfileGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
//import { LoginComponent } from './home/authPages/login/index';
//import { RegisterComponent } from './home/authPages/register/index';

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
        AuthGuard,
        HomeGuard,
        ProfileGuard,
        AlertService,
        AuthenticationService,
        UserService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
