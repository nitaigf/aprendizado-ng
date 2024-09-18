import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson22',
  templateUrl: './lesson22.component.html',
  styleUrl: './lesson22.component.scss'
})
export class Lesson22Component {
  // Pipes - https://angular.dev/tutorials/learn-angular/22-pipes
  text = 'yOunGTECH';
  // Formatting data with pipes - https://angular.dev/tutorials/learn-angular/23-pipes-format-data
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
}
