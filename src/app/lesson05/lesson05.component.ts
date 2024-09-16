import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson05',
  templateUrl: './lesson05.component.html',
  styleUrl: './lesson05.component.scss'
})
export class Lesson05Component {
  // Control flow - @for
  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];
}
