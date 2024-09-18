import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousesForLocationComponent } from './houses-for-location/houses-for-location.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  // Next steps - Add content of old Angular 17 Tutorials - Your first Angular app - https://v17.angular.io/tutorial/first-app
  {
    path: '',
    redirectTo: 'houses-for-location',
    pathMatch: 'full'
  },
  {
    path: 'houses-for-location',
    component: HousesForLocationComponent,
    title: 'Next steps - Add content of old Angular 17 Tutorials - Your first Angular app',
    data: {
      title: 'Houses for location',
      comment: 'Esta página é o resultado do tutorial "Your first Angular app" do Angular 17',
      lessonUrls: ['https://v17.angular.io/tutorial/first-app']
    }
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Ng17FirstAppRoutingModule { }
