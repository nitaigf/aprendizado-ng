import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ChildComponent } from './child/child.component';
import { CommentsComponent } from './comments/comments.component';
import { NgOptimizedImage, provideImgixLoader } from '@angular/common';
import { provideRouter } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ChildComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
  ],
  providers: [
    provideClientHydration(),
    // provideImgixLoader('http://localhost:4200/')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
