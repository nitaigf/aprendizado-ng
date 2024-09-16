import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  // Enabling rounting (já feito quando o projeto é standalone=false, caso contrério, é necessário fazer a configuração manualmente)
  // Link to a route with RouterLink - https://angular.dev/tutorials/learn-angular/14-routerLink
}
