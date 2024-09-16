import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ChildComponent } from './child/child.component';
import { CommentsComponent } from './comments/comments.component';
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

// Enabling routing - https://angular.dev/tutorials/learn-angular/12-enable-routing
const routes: Routes = [
  // Define a route - https://angular.dev/tutorials/learn-angular/13-define-a-route
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    title: 'App Home Page',
    data: { title: 'App Home Page', comment: 'Essa página e o componente nav são o resultado da reorganização do código-fonte feito após as liçoes 12 e 13, juntamente com o ajuste para uso do RouterLink da lição 14.' },
    component: HomeComponent,
  },
  // -- LESSONS
  // Anatomy of a Component - https://angular.dev/tutorials/learn-angular/1-components-in-angular
  {
    path: 'lesson01',
    title: 'Lesson 1 - Anatomy of a Component',
    data: { title: 'Lesson 1 - Anatomy of a Component', lessonUrl: 'https://angular.dev/tutorials/learn-angular/1-components-in-angular' },
    component: Lesson01Component,
  },
  // Updating the component - https://angular.dev/tutorials/learn-angular/2-updating-the-component-class
  {
    path: 'lesson02',
    title: 'Lesson 2 - Updating the component',
    data: { title: 'Lesson 2 - Updating the component class', lessonUrl: 'https://angular.dev/tutorials/learn-angular/2-updating-the-component-class' },
    component: Lesson02Component,
  },
  // Component composition - https://angular.dev/tutorials/learn-angular/3-composing-components
  {
    path: 'lesson03',
    title: 'Lesson 3 - Component composition',
    data: { title: 'Lesson 3 - Component composition', lessonUrl: 'https://angular.dev/tutorials/learn-angular/3-composing-components' },
    component: Lesson03Component,
  },
  // Control flow in components - @if - https://angular.dev/tutorials/learn-angular/4-control-flow-if
  {
    path: 'lesson04',
    title: 'Lesson 4 - Control flow in components - @if',
    data: { title: 'Lesson 4 - Control flow in components - @if', lessonUrl: 'https://angular.dev/tutorials/learn-angular/4-control-flow-if' },
    component: Lesson04Component,
  },
  // Control flow - @for - https://angular.dev/tutorials/learn-angular/5-control-flow-for
  {
    path: 'lesson05',
    title: 'Lesson 5 - Control flow - @for',
    data: { title: 'Lesson 5 - Control flow - @for', lessonUrl: 'https://angular.dev/tutorials/learn-angular/5-control-flow-for' },
    component: Lesson05Component,
  },
  // Property binding - https://angular.dev/tutorials/learn-angular/6-property-binding
  {
    path: 'lesson06',
    title: 'Lesson 6 - Property binding',
    data: { title: 'Lesson 6 - Property binding', lessonUrl: 'https://angular.dev/tutorials/learn-angular/6-property-binding' },
    component: Lesson06Component,
  },
  // Event handling - https://angular.dev/tutorials/learn-angular/7-event-handling
  {
    path: 'lesson07',
    title: 'Lesson 7 - Event handling',
    data: { title: 'Lesson 7 - Event handling', lessonUrl: 'https://angular.dev/tutorials/learn-angular/7-event-handling' },
    component: Lesson07Component,
  },
  // Communicating with @input - https://angular.dev/tutorials/learn-angular/8-input
  {
    path: 'lesson08',
    title: 'Lesson 8 - Communicating with @input',
    data: { title: 'Lesson 8 - Communicating with @input', lessonUrl: 'https://angular.dev/tutorials/learn-angular/8-input' },
    component: Lesson08Component,
  },
  // Communicating with @output - https://angular.dev/tutorials/learn-angular/9-output
  {
    path: 'lesson09',
    title: 'Lesson 9 - Communicating with @output',
    data: { title: 'Lesson 9 - Communicating with @output', lessonUrl: 'https://angular.dev/tutorials/learn-angular/9-output' },
    component: Lesson09Component,
  },
  // Deferrable views - https://angular.dev/tutorials/learn-angular/10-deferrable-views
  {
    path: 'lesson10',
    title: 'Lesson 10 - Deferrable views',
    data: { title: 'Lesson 10 - Deferrable views', lessonUrl: 'https://angular.dev/tutorials/learn-angular/10-deferrable-views' },
    component: Lesson10Component,
  },
  // Optimizing images - https://angular.dev/tutorials/learn-angular/11-optimizing-images
  {
    path: 'lesson11',
    title: 'Lesson 11 - Optimizing images',
    data: { title: 'Lesson 11 - Optimizing images', lessonUrl: 'https://angular.dev/tutorials/learn-angular/11-optimizing-images' },
    component: Lesson11Component,
  },
  // -- COMPONENTS
  // {
  //   path: 'user',
  //   title: 'App User Page',
  //   component: UserComponent,
  // },
  // {
  //   path: 'child',
  //   title: 'App Child Component',
  //   component: ChildComponent,
  // },
  // {
  //   path: 'comments',
  //   title: 'App Comments Component',
  //   component: CommentsComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
