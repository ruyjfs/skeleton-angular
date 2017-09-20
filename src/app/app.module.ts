import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdProgressSpinnerModule, MdIconModule} from '@angular/material';
import 'hammerjs';

import { RouterModule, Routes } from '@angular/router';

// Routes
import { LoginComponent } from './main/login/login.component';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent, data: { title: 'Home' }},
  {path: 'login', component: LoginComponent, data: { title: 'Login' }},
  {path: 'about', component: AboutComponent, data: { title: 'About' }},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    RouterModule,
    MdButtonModule, MdCheckboxModule, MdProgressSpinnerModule, MdToolbarModule, MdIconModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
