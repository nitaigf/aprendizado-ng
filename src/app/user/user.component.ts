import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  // Component composition (criação do component user)
  // Pipes - https://angular.dev/tutorials/learn-angular/22-pipes
  username = 'yOunGTECH';
  // Communicating with @Input (interação com o component user)
  @Input() name = '';
}
