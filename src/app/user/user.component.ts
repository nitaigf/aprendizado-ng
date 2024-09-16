import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  // Component composition (criação do component user)
  username = 'youngTech';
  // Communicating with @Input (interação com o component user)
  @Input() name = '';
  // Optimizing images (interação com o component user)
  logoUrl = '/assets/logo.png';
  logoAlt = 'Angular logo';
}
