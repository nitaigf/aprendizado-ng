import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  // Creating an injectable service - https://angular.dev/tutorials/learn-angular/19-creating-an-injectable-service
  cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];

  constructor() { }

  getCars(): string[] {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars[id];
  }
}
