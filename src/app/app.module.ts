import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdProgressSpinnerModule} from '@angular/material';
import 'hammerjs';

import { RouterModule, Routes } from '@angular/router';

// Routes
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent, data: { title: 'Home' }},
  {path: 'login', component: LoginComponent, data: { title: 'Login' }},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    RouterModule,
    MdButtonModule, MdCheckboxModule, MdProgressSpinnerModule, MdToolbarModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
