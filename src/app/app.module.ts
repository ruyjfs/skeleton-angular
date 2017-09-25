import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdProgressSpinnerModule, MdIconModule, MdCardModule, MdInputModule, MdTabsModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import 'hammerjs';
import 'materialize-css';
// import { MaterializeModule } from "angular2-materialize";

import { AppComponent } from './app.component';

// Routes
import { LoginComponent } from './main/login/login.component';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { UsersComponent } from './admin/users/users.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent, data: { title: 'Home' }},
  // {path: '/', component: HomeComponent, data: { title: 'Home' }},
  {path: 'home', component: HomeComponent, data: { title: 'Home' }},
  {path: 'login', component: LoginComponent, data: { title: 'Login' }},
  {path: 'about', component: AboutComponent, data: { title: 'About' }},
  {path: 'admin/users', component: UsersComponent, data: { title: 'Users' }},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    RouterModule,
    MdButtonModule, MdCheckboxModule, MdProgressSpinnerModule, MdToolbarModule, MdIconModule, MdCardModule, MdInputModule, MdTabsModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: false } // <-- debugging purposes only
    ),
    // MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
