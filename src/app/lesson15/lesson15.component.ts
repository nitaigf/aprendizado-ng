import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson15',
  templateUrl: './lesson15.component.html',
  styleUrl: './lesson15.component.scss'
})
export class Lesson15Component {
  // Forms - https://angular.dev/tutorials/learn-angular/15-forms
  favoriteFramework = '';
  // Getting form control values - https://angular.dev/tutorials/learn-angular/16-form-control-values
  showFramework() {
    alert(this.favoriteFramework);
  }
}
