import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ChildComponent } from './child/child.component';
import { CommentsComponent } from './comments/comments.component';

// Enabling rounting (já feito quando o projeto é standalone=false, caso contrério, é necessário fazer a configuração manualmente)
const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    pathMatch: 'full',
  },
  {
    path: 'child',
    component: ChildComponent,
    pathMatch: 'full',
  },
  {
    path: 'comments',
    component: CommentsComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
