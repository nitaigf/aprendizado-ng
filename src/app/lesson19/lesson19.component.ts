import { Component, inject } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-lesson19',
  templateUrl: './lesson19.component.html',
  styleUrl: './lesson19.component.scss'
})
export class Lesson19Component {
  // Creating an injectable service - https://angular.dev/tutorials/learn-angular/19-creating-an-injectable-service
  carService = inject(CarService); // Método de injeção direta
  // carService = any; // Método alternativo

  // Método alternativo, usando o constructor
  // constructor(private carService: CarService) { }
}
