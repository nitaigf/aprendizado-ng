import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ChildComponent } from './child/child.component';
import { CommentsComponent } from './comments/comments.component';
import { NgOptimizedImage } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Lesson01Component } from './lesson01/lesson01.component';
import { Lesson02Component } from './lesson02/lesson02.component';
import { Lesson03Component } from './lesson03/lesson03.component';
import { Lesson04Component } from './lesson04/lesson04.component';
import { Lesson05Component } from './lesson05/lesson05.component';
import { Lesson06Component } from './lesson06/lesson06.component';
import { Lesson07Component } from './lesson07/lesson07.component';
import { Lesson08Component } from './lesson08/lesson08.component';
import { Lesson09Component } from './lesson09/lesson09.component';
import { Lesson10Component } from './lesson10/lesson10.component';
import { Lesson11Component } from './lesson11/lesson11.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Lesson15Component } from './lesson15/lesson15.component';
import { Lesson17Component } from './lesson17/lesson17.component';

@NgModule({
  declarations: [
    // Introduction - https://angular.dev/tutorials/learn-angular
    AppComponent,
    ChildComponent,
    CommentsComponent,
    // Anatomy of a Component - https://angular.dev/tutorials/learn-angular/1-components-in-angular
    Lesson01Component,
    // Updating the component - https://angular.dev/tutorials/learn-angular/2-updating-the-component-class
    Lesson02Component,
    // Component composition - https://angular.dev/tutorials/learn-angular/3-composing-components
    Lesson03Component,
    // Control flow in components - @if - https://angular.dev/tutorials/learn-angular/4-control-flow-if
    Lesson04Component,
    // Control flow - @for - https://angular.dev/tutorials/learn-angular/5-control-flow-for
    Lesson05Component,
    // Property binding - https://angular.dev/tutorials/learn-angular/6-property-binding
    Lesson06Component,
    // Event handling - https://angular.dev/tutorials/learn-angular/7-event-handling
    Lesson07Component,
    // Communicating with @input - https://angular.dev/tutorials/learn-angular/8-input
    Lesson08Component,
    // Communicating with @output - https://angular.dev/tutorials/learn-angular/9-output
    Lesson09Component,
    // Deferrable views - https://angular.dev/tutorials/learn-angular/10-deferrable-views
    Lesson10Component,
    // Optimizing images - https://angular.dev/tutorials/learn-angular/11-optimizing-images
    Lesson11Component,
    UserComponent,
    // Define a route - https://angular.dev/tutorials/learn-angular/13-define-a-route
    HomeComponent,
    NavComponent,
    // Forms - https://angular.dev/tutorials/learn-angular/15-forms
    Lesson15Component,
    // Reactive forms - https://angular.dev/tutorials/learn-angular/17-reactive-forms
    Lesson17Component,
  ],
  imports: [
    BrowserModule,
    // Enabling routing - https://angular.dev/tutorials/learn-angular/12-enable-routing
    AppRoutingModule,
    // Optimizing images - https://angular.dev/tutorials/learn-angular/11-optimizing-images
    NgOptimizedImage,
    // Forms - https://angular.dev/tutorials/learn-angular/15-forms
    FormsModule,
    // Reactive forms - https://angular.dev/tutorials/learn-angular/17-reactive-forms
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    // provideImgixLoader('http://localhost:4200/')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
