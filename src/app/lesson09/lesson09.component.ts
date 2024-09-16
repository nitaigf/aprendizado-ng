import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson09',
  templateUrl: './lesson09.component.html',
  styleUrl: './lesson09.component.scss'
})
export class Lesson09Component {
  // Communicating with @Output (interação com o component child)
  items = new Array();
  addItem(item: string) {
    this.items.push(item);
  }
}
