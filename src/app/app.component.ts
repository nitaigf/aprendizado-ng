import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // initial commit / Introduction
  title = 'aprendizado-ng';
  // Updating the component
  city = 'San Francisco';
  // Component composition (criação do component user)
  // Control flow in components - @if
  isServerRunning = true;
  // Control flow - @for
  users = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];
}
