import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng17FirstAppRoutingModule } from './ng17-first-app-routing.module';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { DetailsComponent } from './details/details.component';
import { HousesForLocationComponent } from './houses-for-location/houses-for-location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HousingLocationComponent,
    DetailsComponent,
    HousesForLocationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng17FirstAppRoutingModule
  ]
})
export class Ng17FirstAppModule { }
