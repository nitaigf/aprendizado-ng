import { Component, inject } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-lesson19',
  templateUrl: './lesson19.component.html',
  styleUrl: './lesson19.component.scss'
})
export class Lesson19Component {
  // Creating an injectable service - https://angular.dev/tutorials/learn-angular/19-creating-an-injectable-service
  // carService = inject(CarService); // Método de injeção direta

  // carService = any; // Método alternativo, declarando a variável como any
  // Método alternativo, usando o constructor para injetar o serviço
  // constructor(private carService: CarService) { }

  // Inject-based dependency injection - https://angular.dev/tutorials/learn-angular/20-inject-based-di
  display = '';
  // constructor() {
  //   this.display = this.carService.getCars().join(' ⭐️ ');
  // }

  // Constructor-based dependency injection - https://angular.dev/tutorials/learn-angular/21-constructor-based-di
  constructor(private carService: CarService) {
    this.display = this.carService.getCars().join(' ⭐️ ');
  }
}
