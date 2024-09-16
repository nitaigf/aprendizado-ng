import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson07',
  templateUrl: './lesson07.component.html',
  styleUrl: './lesson07.component.scss'
})
export class Lesson07Component {
  // Event handling
  message = '';
  onMouseOver() {
    this.message = 'Way to go 🚀';
  }
}
